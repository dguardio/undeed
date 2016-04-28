var React = require('react');
var Modal = require("react-modal");
var Link = require('react-router').Link;

var Logo = require('./Logo');
var JobSearch = require('./JobSearch');

var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var SessionStore = require("../stores/session");
var ApplicationStore = require("../stores/application");
var MyJobStore = require('../stores/myJob');

var JobDetail = React.createClass({
	getInitialState: function () {

    return {
      job : JobStore.find(parseInt(this.props.params.jobId)),
      myJob : [],
      user :{},
			modalIsOpen: false,
			useOnFile: false,
			uploadResume: false,
			onFileattached: false,
    };
	},

	componentDidMount: function (){
		this.storeToken = JobStore.addListener(this._onChangeJob);
		this.storeToken2 = MyJobStore.addListener(this._onChangeMyJob);
		this.storeToken3 = SessionStore.addListener(this._onChangeSession);
		this.storeToken4 = SessionStore.addListener(this._onChangeApp);
		ApiUtil.fetchSingleJob(parseInt(this.props.params.jobId));
		ApiUtil.fetchCurrentUser(function(){
			var currentUser = SessionStore.currentUser();
			if (currentUser){
				this.setState({
					name: currentUser.real_name,
					email: currentUser.email,
					user_id: currentUser.id,
					resumeOnFile: currentUser.resume_url
				});
				ApiUtil.fetchMyJobs(currentUser.id, function(){
					if (currentUser && MyJobStore.exist(parseInt(this.props.params.jobId))===false){
						var myJob = {
							status: "visited",
							job_id: this.props.params.jobId,
							seeker_id: currentUser.id
						};
						ApiUtil.createMyJob(myJob);
					}
				}.bind(this));
			}
		}.bind(this));
	},
  _onChangeApp: function () {
		this.setState({
      app: ApplicationStore.all()[0],
     });
	},
  _onChangeMyJob: function () {
		this.setState({
      myjob: MyJobStore.all()[0],
     });
	},
  _onChangeJob: function () {
		this.setState({
      job: JobStore.find(parseInt(this.props.params.jobId)),
     });
	},
  _onChangeSession: function () {
		this.setState({
      user: SessionStore.currentUser(),
     });
	},

  updateName: function(e) {
    this.setState({ name: e.currentTarget.value });
  },
  updateCoverLetter: function(e) {
    this.setState({ coverLetter: e.currentTarget.value});
  },
  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

	openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

	handleSave: function(){
		ApiUtil.fetchCurrentUser(function(){
			if (SessionStore.currentUser()){
				var currentUser = SessionStore.currentUser();
				ApiUtil.fetchMyJobs(currentUser.id, function(){
					myjobid = MyJobStore.findMyJobID(parseInt(this.props.params.jobId));
					var myJob = {
						id: myjobid,
						status: "saved",
						job_id: parseInt(this.props.params.jobId),
						seeker_id: currentUser.id
					};
					ApiUtil.updateMyJobStatus(myjobid, myJob);
				}.bind(this));
			}
		}.bind(this));
	},

		handleApply: function(){
			ApiUtil.fetchAppsWithJobID(this.state.job.id, function(){
				if (ApplicationStore.all[0]){
					var currentUser = SessionStore.currentUser();
					ApiUtil.fetchMyJobs(currentUser.id, function(){
						myjobid = MyJobStore.findMyJobID(parseInt(this.props.params.jobId));
						var myJob = {
							id: myjobid,
							status: "applied",
							job_id: parseInt(this.props.params.jobId),
							seeker_id: currentUser.id
						};
						ApiUtil.updateMyJobStatus(myjobid, myJob);
					}.bind(this));
				}
			}.bind(this));
		},



	componentWillReceiveProps: function(newProps){
		ApiUtil.fetchSingleJob(parseInt(newProps.params.jobId));
	},

	componentWillUnmount: function() {
		this.storeToken.remove();
		this.storeToken2.remove();
		this.storeToken3.remove();
		this.storeToken4.remove();
	},
	toUploadResume: function(){
		this.setState({
			uploadResume: true,
			useOnFile: false
		});
	},

	render: function () {
		var customStyles = {
		  overlay : {
		    position        : 'fixed',
		    top             : 0,
		    left            : 0,
		    right           : 0,
		    bottom          : 0,
		    backgroundColor : 'rgba(255, 255, 255, 0.75)',
		  },
		  content : {
		    position				:	'absolute',
		    border          : '1px solid #ccc',
		    padding         : '10px',
				margin: "auto auto",
				width						: '700px',
				height					: '500px'
		  }
		};

		var job = this.state.job;
		var email = "";
		var savebutton = "job-detail-save";
		var applybutton = "job-detail-apply";
		var saved = "notification-hide";
		var applied = "notification-hide";
		var salary;
		if (job){
			salary = job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}
		if(!SessionStore.currentUser()){
			savebutton = "job-detail-save-hide";
			saved = "notification-hide";
			applybutton = "job-detail-apply";
			applied = "notification-hide";
		}else if (!job|| MyJobStore.findMyJobStatus(job.id)==="applied"){
			savebutton = "job-detail-save-hide";
			applybutton = "job-detail-apply-hide";
			saved = "notification-hide";
			applied = "notification-show";
		}else if (!job || MyJobStore.findMyJobStatus(job.id)==="saved"){
			savebutton = "job-detail-save-hide";
			saved = "notification-show";
			applybutton = "job-detail-apply";
			applied = "notification-hide";
		}

		var resumeUpload;
		if (!this.state.resumeOnFile){
			resumeUpload = <input className="user-form-input-field-file"
							              type="file"
							              onChange={this.handleFileChange}
							              />;
			}
		else if (this.state.resumeOnFile && this.state.uploadResume){
			resumeUpload = <div><input className="user-form-input-field-file"
							              type="file"
							              onChange={this.handleFileChange}
							              />
													or <a onClick={this.uploadOnFile}>Use resume on file</a>

							      </div>;
		}
		else if (this.state.resumeOnFile && !this.state.useOnFile){
			resumeUpload = <div className="user-form-input-field-file">
											<a onClick={this.uploadOnFile}>Use resume on file</a>
											or
											<a onClick={this.toUploadResume}> upload a different one</a>;
											</div>;
			}
		else if (this.state.resumeOnFile && this.state.useOnFile){
			resumeUpload = <div className="user-form-input-field-file">
								<h3>Resume on file Attached</h3>   or
								<a onClick={this.toUploadResume}> upload a different one</a>;
								</div>;
		}

 		if (!job){
			return <div></div>;
		}

		return (

		<div>
			<div className="job-detail-search-bar group">
				<Link className="job-detail-logo-link" to={"/"}><Logo /></Link>
	      <div className="job-detail-search-bar-search"><JobSearch /></div>
      </div>
			<div className="job-detail-content">
				<div className="job-detail-header">
					<h2 className="job-detail-title">{job.title}</h2>
					{job.employer.name} - {job.location.city}<br />
				Salary: ${salary}/year<br />
				</div>
				<div className="job-detail-detail" dangerouslySetInnerHTML={{__html: job.description}} />
				<button className={applybutton}onClick={this.openModal}>Apply This Job</button>
				<button className={applied} >Already Applied</button>
				<button className={savebutton} onClick={this.handleSave}>Save This Job</button>
				<button className={saved} >Job Saved</button>

				<Modal className="group"
	          isOpen={this.state.modalIsOpen}
	          onRequestClose={this.closeModal}
	          style={customStyles} >
						<div className="application-logo"><Logo className="application-img"></Logo></div>
						<div className="application-content">
							<div className="application-innercontent">
			          <div className="application-title">{job.title}</div>
								{job.employer.name} - {job.location.city}

			          <form onSubmit={this.handleSubmit}>
			  					<label htmlFor="realname">Name</label>
									<input onChange={this.updateName} value={this.state.name} className="application-input" type="text" />
			  					<label htmlFor="email">Email</label>
									<input onChange={this.updateEmail} value={this.state.email} className="application-input" type="text" />
			  					<label htmlFor="coverletter">Cover Letter</label>
									<textarea onChange={this.updateCoverLetter} className="application-input-field"></textarea>

				          <label>Resume
										{resumeUpload}
				          </label>
			            <button className="app-button">Submit Application</button>

			          </form>
							<a className="app-cancel" onClick={this.closeModal}>Cancel</a>
						</div>
						</div>
	      </Modal>
			</div>
		</div>
		);
	},
  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ resumeFile: file, resumeUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
  },

	uploadOnFile: function(){
		this.setState({
			useOnFile: true,
			uploadResume: false,
			onFileattached: true,
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		if (this.state.useOnFile === false){
	    var formData = new FormData();
	    formData.append("application[real_name]", this.state.realName);
	    formData.append("application[resume]", this.state.resumeFile);
			formData.append("application[job_id]", this.state.job.id);
			formData.append("application[real_name]", this.state.name);
			formData.append("application[email]", this.state.email);
			formData.append("application[cover_letter]", this.state.coverLetter);
		 	formData.append("application[user_id]", this.state.user_id);

			ApiUtil.createApplication(formData);
		}else{
				var application ={
					job_id: this.state.job.id,
					real_name: this.state.name,
					email: this.state.email,
					cover_letter: this.state.coverLetter,
				 	user_id: this.state.user_id,
					resume_url: this.state.user.resume_url
				};
				ApiUtil.createApplication2(application);
		}
		this.handleApply();
		this.closeModal();
	}

});
module.exports = JobDetail;

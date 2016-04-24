var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var JobSearch = require('./JobSearch');
var SessionStore = require("../stores/session");
var Modal = require("react-modal");
var MyJobStore = require('../stores/myJob');
var JobDetail = React.createClass({
	getInitialState: function () {

		return this.getStateFromStore();
	},

	componentDidMount: function (){
		this.storeToken = JobStore.addListener(this.updateStateFromStore);
		this.storeToken2 = MyJobStore.addListener(this.updateStateFromStore);
		ApiUtil.fetchSingleJob(parseInt(this.props.params.jobId));
		ApiUtil.fetchCurrentUser(function(){
			var currentUser = SessionStore.currentUser();
			if (currentUser){
				this.setState({
					name: currentUser.real_name,
					email: currentUser.email,
					user_id: currentUser.id
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

	updateStateFromStore: function() {
		this.setState(this.getStateFromStore());
	},

	getStateFromStore: function () {

		var job = JobStore.find(parseInt(this.props.params.jobId));
		return {
			job: job,
			modalIsOpen: false,
			myjobs: MyJobStore.all(),
			// name: "",
			// coverLetter :"",
			// email: "",
			// user_id : null
		};
	},

  updateName: function(e) {
		// debugger;
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

	componentWillReceiveProps: function(newProps){
		ApiUtil.fetchSingleJob(parseInt(newProps.params.jobId));
	},

	componentWillUnmount: function() {
		this.storeToken.remove();
		this.storeToken2.remove();
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
		var saved = "notification-hide";

		if(!SessionStore.currentUser()){
			savebutton = "job-detail-save-hide";
			saved = "notification-hide";
		}else if (!job || MyJobStore.findMyJobStatus(job.id)==="saved"){
			savebutton = "job-detail-save-hide";
			saved = "notification-show";
		}

		if (SessionStore.currentUser()){
			debugger;
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
					Salary: {job.salary}<br />
				</div>
				<div className="job-detail-detail" dangerouslySetInnerHTML={{__html: job.description}} />
				<button className="job-detail-apply"onClick={this.openModal}>Apply This Job</button>
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
									<textarea onChange={this.updateCoverLetter} className="application-input-field" />

				          <label>Resume
				            <input className="user-form-input-field-file"
				              type="file"
				              onChange={this.handleFileChange}
				              />
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
	handleSubmit: function(e) {
		e.preventDefault();
    var formData = new FormData();
		// debugger;
    formData.append("application[real_name]", this.state.realName);
    formData.append("application[resume]", this.state.resumeFile);
		formData.append("application[job_id]", this.state.job.id);
		formData.append("application[real_name]", this.state.name);
		formData.append("application[email]", this.state.email);
		formData.append("application[cover_letter]", this.state.coverLetter);
	 	formData.append("application[user_id]", this.state.user_id);
		// var application ={
		// 	job_id: this.state.job.id,
		// 	real_name: this.state.name,
		// 	email: this.state.email,
		// 	cover_letter: this.state.coverLetter,
		//  	user_id: this.state.user_id};
		// ApiUtil.createApplication(application);
		ApiUtil.createApplication(formData);

		this.closeModal();
	}

});
module.exports = JobDetail;

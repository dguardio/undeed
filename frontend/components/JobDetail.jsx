var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var JobSearch = require('./JobSearch');
var SessionStore = require("../stores/session");
var Modal = require("react-modal");


var JobDetail = React.createClass({
	getInitialState: function () {
		return this.getStateFromStore();
	},

	componentDidMount: function (){
		this.storeToken = JobStore.addListener(this.updateStateFromStore);
		ApiUtil.fetchSingleJob(parseInt(this.props.params.jobId));
		if (this.state.currentUser && MyJobStore.exist(parseInt(this.props.params.jobId))===false){
			var myJob = {
				status: "visited",
				job_id: this.props.params.jobId,
				seeker_id: this.state.currentUser.id
			};
			ApiUtil.createMyJob(myJob);
		}
	},

	updateStateFromStore: function() {
		this.setState(this.getStateFromStore());
	},

	getStateFromStore: function () {
		// ApiUtil.fetchJobs();
		var job = JobStore.find(parseInt(this.props.params.jobId));
		// debugger;
		return {
			job: job,
			currentUser: SessionStore.currentUser(),
			modalIsOpen: false
		};
	},
	openModal: function() {
    this.setState({modalIsOpen: true});
  },
  closeModal: function() {
    this.setState({modalIsOpen: false});
  },


	componentWillReceiveProps: function(newProps){
		ApiUtil.fetchSingleJob(parseInt(newProps.params.jobId));
	},

	componentWillUnmount: function() {
		this.storeToken.remove();
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
		// debugger;
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
									<input className="application-input"type="text" />
			  					<label htmlFor="email">Email</label>
									<input className="application-input"type="text" />
			  					<label htmlFor="coverletter">Cover Letter</label>
									<input className="application-input-field" type="textarea" />
			            <button className="app-button">Submit Application (sends an email, not implemented yet)</button>

			          </form>
							<a className="app-cancel" onClick={this.closeModal}>Cancel</a>
						</div>
						</div>
	      </Modal>
			</div>
		</div>
		);
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var email ={
			employer_email: job.employer.email,
			 name: "guestguest",
			 user_email: "",
			 coverletter: "" };
		ApiUtil.submitEmail(email);
	}
});
module.exports = JobDetail;

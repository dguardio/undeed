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
		// debugger;
		if (this.state.currentUser){
			var myJob = {
				status: "visited",
				job_id: this.props.params.jobId,
				seeker_id: this.state.currentUser.id
			};
			ApiUtil.createMyJob(myJob, function(){

			});
		}
	},

	updateStateFromStore: function() {
		this.setState(this.getStateFromStore());
	},

	getStateFromStore: function () {
		var job = JobStore.find(parseInt(this.props.params.jobId));
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
		    position        : 'fixed',
		    top             : '100px',
		    left            : '150px',
		    right           : '150px',
		    bottom          : '100px',
		    border          : '1px solid #ccc',
		    padding         : '10px',

		  }
		};

		var job = this.state.job;
		var email = "";
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
				<div className="job-detail-detail">{job.description}</div>
				<button className="job-detail-apply"onClick={this.openModal}>Apply This Job</button>
				<Modal className="group"
	          isOpen={this.state.modalIsOpen}
	          onRequestClose={this.closeModal}
	          style={customStyles} >
						<div className="application-logo"><Logo></Logo></div>
						<div className="application-content">
		          <h2>{job.title}</h2>
							{job.employer.name} - {job.location.city}

		          <form>
		  					<label htmlFor="email">Email</label>
								<input type="text" />
		  					<label htmlFor="coverletter">Cover Letter</label>
								<input type="text" />
		            <button>Submit Application (sends an email, not implemented yet)</button>

		          </form>
						<button onClick={this.closeModal}>Cancel</button>
						</div>
	      </Modal>
			</div>
		</div>
		);
	}
});
module.exports = JobDetail;

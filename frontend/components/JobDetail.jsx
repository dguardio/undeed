var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Logo = require('./Logo');
var Link = require('react-router').Link;



var JobDetail = React.createClass({
	getInitialState: function () {

		return this.getStateFromStore();
	},

	componentDidMount: function (){
		this.storeToken = JobStore.addListener(this.updateStateFromStore);
		ApiUtil.fetchSingleJob(parseInt(this.props.params.jobId));
	},

	updateStateFromStore: function() {
		this.setState(this.getStateFromStore());
	},

	getStateFromStore: function () {
		var job = JobStore.find(parseInt(this.props.params.jobId));
		return { job: job };
	},


	componentWillReceiveProps: function(newProps){
		ApiUtil.fetchSingleJob(parseInt(newProps.params.jobId));
	},

	componentWillUnmount: function() {
		this.storeToken.remove();
	},

	render: function () {
		var job = this.state.job;
 		if (!job){
			return <div></div>;
		}
		// debugger;
		return (

		<div>

				<Link to={"/"}><Logo /></Link>
			<div className="main-content">
				<h2 className="job-detail-title">{job.title}</h2>
				{job.employer.name}-{job.location}<br />
				{job.salary}<br />
				{job.description}<br />
			</div>
		</div>
		);
	}
});
module.exports = JobDetail;

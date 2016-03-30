var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');

var JobDetail = React.createClass({


	render: function() {
		return (

			<li>{this.props.job.title}<br />
				{this.props.job.employer.name}-{this.props.job.location}<br />
				{this.props.job.salary}<br />
				{this.props.job.description}<br />
			</li>
		);
	}

});

module.exports = JobDetail;
// 	{job.title}<br />
// {job.employer.name}-{job.location}<br />
// 	{job.salary}<br />
// 	{job.description}<br />

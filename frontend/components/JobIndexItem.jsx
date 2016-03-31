var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Link = require('react-router').Link;
var JobIndexItem = React.createClass({


	render: function() {
		var job = this.props.job;
		return (

			<li className="job-index-item">
				<Link className="job-index-item-title" to={"/jobs/" + job.id}>
					{job.title}
				</Link>
				<br />
				{job.employer.name}-{job.location}<br />
				{job.salary}<br />
				{job.description}<br />
			</li>
		);
	}

});

module.exports = JobIndexItem;

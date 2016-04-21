var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Link = require('react-router').Link;
var JobAppIndexItem = React.createClass({



	render: function() {

		var job = this.props.job;
    var count = this.props.count;
		return (
			<div>
				<li className="job-index-item">
					<Link className="job-index-item-title" to={"/jobs/" + job.id}>
						{job.title}
					</Link>
					<br />
					{job.employer.name} - {job.location.city}<br />
					{job.salary}<br />
					{job.description.split(" ").slice(0,10).join(" ") + "..."}<br />
        Application Count: {count}
				</li>
			</div>
		);
	}

});

module.exports = JobAppIndexItem;

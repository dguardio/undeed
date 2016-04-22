var React = require('react');

var JobStore = require('../stores/job');
var Link = require('react-router').Link;
var JobIndexItem = React.createClass({


	render: function() {
		var job = this.props.job;
		var salary = job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return (
			<div>
				<li className="job-index-item">
					<Link className="job-index-item-title" to={"/jobs/" + job.id}>
						{job.title}
					</Link>
					<br />
					{job.employer.name} - {job.location.city}<br />
				${salary}<br />
					{job.description.split(" ").slice(0,10).join(" ") + "..."}<br />
				</li>
			</div>
		);
	}

});

module.exports = JobIndexItem;

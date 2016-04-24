var React = require('react');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Link = require('react-router').Link;
var AppIndexItem = React.createClass({

	calculateDate : function(date){
		var oneDay = 24*60*60*1000;
		var today = new Date();
		var submittedDate = new Date(date);
		var diffDays = Math.round(Math.abs((submittedDate.getTime() - today.getTime())/(oneDay)));
		return diffDays;
	},

	render: function() {

		var app = this.props.app;
		return (
			<div>
				<li className="job-index-item">
					<br />
					Applicant: {app.real_name}<br />
					Submiited: {this.calculateDate(app.updated_at)} day ago<br />
					Email: {app.email}<br />
					CoverLetter: {app.cover_letter}<br />
  				<Link className="job-index-item-title" to={"/apps/" + app.id}>See Application Detail</Link>

				</li>
			</div>
		);
	}

});

module.exports = AppIndexItem;

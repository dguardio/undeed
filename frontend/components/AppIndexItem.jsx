var React = require('react');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Link = require('react-router').Link;
var AppIndexItem = React.createClass({



	render: function() {

		var app = this.props.app;
		return (
			<div>
				<li className="job-index-item">
					<br />
					Application from: {app.real_name}<br />
					Email: {app.email}<br />
					CoverLetter: {app.cover_letter}<br />
  				<Link className="job-index-item-title" to={"/apps/" + app.id}>See Application Detail</Link>

				</li>
			</div>
		);
	}

});

module.exports = AppIndexItem;

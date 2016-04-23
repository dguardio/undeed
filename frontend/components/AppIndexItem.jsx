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
					{app.email}<br />
          {app.real_name}<br />
          {app.cover_letter}<br />

				</li>
			</div>
		);
	}

});

module.exports = AppIndexItem;

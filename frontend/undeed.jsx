var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory =ReactRouter.hashHistory;//is this okay?
var ApiUtil = require('./util/api_util');
var JobStore = require('./stores/job');
var JobIndex = require('./components/JobIndex');
var JobIndexItem = require('./components/JobIndex');
var JobDetail = require('./components/JobDetail');
var App  = React.createClass({

	render: function() {
		return (
			<div>{this.props.children}</div>
		);
	}

});

module.exports = App;




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
		<Router history={hashHistory}>
		    <Route path="/" component={App}>
					<IndexRoute component={JobIndex}/>
					<Route path="/jobs/:jobId" component={JobDetail}/>
				</Route>
  	</Router>,
	document.getElementById('content')
	);
});

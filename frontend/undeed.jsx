var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var ApiUtil = require('./util/api_util');
var JobStore = require('./stores/job');
var JobIndex = require('./components/JobIndex');

// var App  = React.createClass({
//
// 	render: function() {
// 		return (
// 			<div>{JobIndex}</div>
// 		);
// 	}
//
// });
//
// module.exports = App;




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<JobIndex />, document.getElementById('content'));
});

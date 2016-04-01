var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory =ReactRouter.hashHistory;

var ApiUtil = require('./util/api_util');
var JobStore = require('./stores/job');
var CityStore = require('./stores/jobCity');
var JobIndex = require('./components/JobIndex');
var JobIndexItem = require('./components/JobIndex');
var JobDetail = require('./components/JobDetail');
var JobSearch = require('./components/JobSearch');
var MyJobIndex = require("./components/MyJobIndex");

var FrontPage = require('./components/FrontPage');
var LoginForm = require("./components/LoginForm.jsx");
var SignupForm = require("./components/SignupForm.jsx");
var SessionStore = require("./stores/session");
var UserHeader =  require("./components/UserHeader.jsx");

var App  = React.createClass({
	render: function() {

		return (
			<div>
				<UserHeader />
				{this.props.children}
			</div>
		);
	}

});

module.exports = App;




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
		<Router history={hashHistory}>
		    <Route path="/" component={App}>
					<IndexRoute component={FrontPage}/>
					<Route path="/jobs" component={JobIndex}/>
					<Route path="/jobs/:jobId" component={JobDetail}/>
					<Route path="myjobs" component={MyJobIndex} onEnter={_requireLoggedIn}/>
						// <IndexRoute path="" component={MyJobSaved} />
						// <Route path="myjobs/applied" component={MyJobApplied} />
						// <Route path="myjobs/interviewing" component={MyJobInter} />
						// <Route path="myjobs/offered" component={MyJobOfferred} />
						// <Route path="myjobs/hired" component={MyJobHired} />
						// <Route path="myjobs/visited" component={MyJobVisited} />
						// <Route path="myjobs/archived" component={MyJobArchived} />
				</Route>
				<Route path="/login" component={LoginForm}/>
				<Route path="/signup" component={SignupForm}/>
  	</Router>,
	document.getElementById('content')
	);
});

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
}

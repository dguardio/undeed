var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Modal = require("react-modal");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory =ReactRouter.hashHistory;

//Jobs
var JobForm = require('./components/JobForm.jsx');
var UserForm = require('./components/UserForm.jsx');
var UserProfile = require('./components/UserProfile.jsx');
var ApiUtil = require('./util/api_util');
var JobStore = require('./stores/job');
var CityStore = require('./stores/jobCity');
var JobTitleStore = require('./stores/jobTitle');
var JobIndex = require('./components/JobIndex');
var JobIndexItem = require('./components/JobIndex');
var JobDetail = require('./components/JobDetail');
var JobSearch = require('./components/JobSearch');

//Application
var ApplicationStore = require('./stores/application');
var PostedJobIndex = require('./components/PostedJobIndex');

// Auth
var FrontPage = require('./components/FrontPage');
var LoginForm = require("./components/LoginForm.jsx");
var SignupForm = require("./components/SignupForm.jsx");
var SessionStore = require("./stores/session");
var UserHeader =  require("./components/UserHeader.jsx");
var ErrorStore = require('./stores/errorNotification');

// MyJob
var MyJobIndex = require("./components/MyJobIndex");
var MyJobSaved = require('./components/myjob/MyJobSaved');
var MyJobApplied = require('./components/myjob/MyJobApplied');
var MyJobInter = require('./components/myjob/MyJobInter');
var MyJobOfferred = require('./components/myjob/MyJobOfferred');
var MyJobHired = require('./components/myjob/MyJobHired');
var MyJobVisited = require('./components/myjob/MyJobVisited');
var MyJobArchived = require('./components/myjob/MyJobArchived');
var MyJobStore = require('./stores/myJob');



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
	Modal.setAppElement(document.getElementById("content"));
  ReactDOM.render(
		<Router history={hashHistory}>
		    <Route path="/" component={App}>
					<IndexRoute component={FrontPage}/>
					<Route path="/jobs" component={JobIndex}/>
					<Route path="/jobs/:jobId" component={JobDetail}/>
					<Route path="postedjobs" component={PostedJobIndex} onEnter={_requireLoggedIn}/>
					<Route path="userprofile" component={UserProfile} onEnter={_requireLoggedIn}/>
					<Route path="newjob" component={JobForm} onEnter={_requireLoggedIn}/>
					<Route path="userform" component={UserForm} onEnter={_requireLoggedIn}/>
					<Route path="myjobs" component={MyJobIndex} onEnter={_requireLoggedIn}>
						<IndexRoute component={MyJobSaved} />
						<Route path="applied" component={MyJobApplied} />
						<Route path="interviewed" component={MyJobInter} />
						<Route path="offerred" component={MyJobOfferred} />
						<Route path="hired" component={MyJobHired} />
						<Route path="visited" component={MyJobVisited} />
						<Route path="archived" component={MyJobArchived} />
					</Route>
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

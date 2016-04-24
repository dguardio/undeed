var React = require('react');
var ApiUtil = require('../util/api_util');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var JobStore = require('../stores/job');
var SessionStore = require("../stores/session");
var ApplicationStore = require("../stores/application");
var AppIndexItem = require('./AppIndexItem');


var ApplicationIndex = React.createClass({
	getInitialState: function () {
    return {
      job : {},
      apps : [],
      user : {},
    };
	},

  componentDidMount: function (){
    this.applicationStoreToken = ApplicationStore.addListener(this._onChangeApp);
    this.sessionStoreToken = SessionStore.addListener(this._onChangeSession);
    this.jobStoreToken = JobStore.addListener(this._onChangeJob);
    ApiUtil.fetchCurrentUser();
		var jobId = parseInt(this.props.params.jobId);
		ApiUtil.fetchSingleJob(jobId);
    ApiUtil.fetchAppsWithJobID(jobId);
  },

  componentWillUnmount: function() {
    this.applicationStoreToken.remove();
    this.sessionStoreToken.remove();
    this.jobStoreToken.remove();
  },
  _onChangeApp: function () {
		this.setState({
      apps: ApplicationStore.all(),
     });
	},
  _onChangeJob: function () {
		this.setState({
      job: JobStore.all()[0],
     });

	},
  _onChangeSession: function () {
		this.setState({
      user: SessionStore.currentUser(),
     });
	},

  render: function() {
    var apps = this.state.apps.map(function(app) {

      return <AppIndexItem key={app.id} app={app}/>;

    });
    return (
        <div>
          <div className="search-bar group">
    			  <Link className="logo-link" to={"/"}><Logo /></Link>
            <div className="app-index-title">Apps received for {this.state.job.title} Position</div>
          </div>
          <div className="search-results">
            {apps}
          </div>
        </div>
    );
  }

});

module.exports = ApplicationIndex;

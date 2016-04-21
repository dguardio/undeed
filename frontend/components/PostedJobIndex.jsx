var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var JobDetail = require('./JobDetail');
var JobIndexItem = require('./JobIndexItem');
var JobAppIndexItem = require('./JobAppIndexItem');
var SessionStore = require("../stores/session");
var ApplicationStore = require("../stores/application");
var Logo = require('./Logo');
var Link = require('react-router').Link;
var PostedJobIndex = React.createClass({
  getInitialState: function() {
    return {
      jobs: [],
      apps: [],
    };
  },
  _onChangeJob: function () {

		this.setState({
      jobs: JobStore.all(),
     });
	},
  _onChangeApp: function () {

		this.setState({
      apps: ApplicationStore.all(),
     });
	},

  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this._onChangeJob);
    this.ApplicationStoreToken = ApplicationStore.addListener(this._onChangeApp);
    ApiUtil.fetchCurrentUser(function(){
			if (SessionStore.currentUser()){
				ApiUtil.fetchJobsforEmployer(SessionStore.currentUser().id);
        ApiUtil.fetchAppsforEmployer();
      }
    });
  },
  componentWillUnmount: function() {
    this.jobStoreToken.remove();
    this.ApplicationStoreToken.remove();
  },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
      return <JobAppIndexItem key={job.id} job={job} count={ApplicationStore.count(job.id)} />;

    });
      return (
        <div>

    			  <Link className="logo-link" to={"/"}><Logo /></Link>

          <div className="search-results">
            {jobs}
          </div>
        </div>
      );
  }
});
module.exports = PostedJobIndex;

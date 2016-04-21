var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var JobDetail = require('./JobDetail');
var JobIndexItem = require('./JobIndexItem');
var JobAppIndexItem = require('./JobAppIndexItem');
var SessionStore = require("../stores/session");
var Logo = require('./Logo');
var Link = require('react-router').Link;
var PostedJobIndex = React.createClass({
  getInitialState: function() {
    return {
      jobs: [],
    };
  },
  _onChange: function () {

		this.setState({
      jobs: JobStore.all(),
     });
	},


  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this._onChange);
    ApiUtil.fetchCurrentUser(function(){
			if (SessionStore.currentUser()){
				ApiUtil.fetchJobsforEmployer(SessionStore.currentUser().id);
        ApiUtil.fetchAppsforEmployer();
      }
    });
  },
  componentWillUnmount: function() {
    this.jobStoreToken.remove();
  },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
      // return <JobIndexItem key={job.id} job={job} />;
      return <JobAppIndexItem key={job.id} job={job} />;

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

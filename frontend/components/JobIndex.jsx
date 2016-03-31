var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var JobDetail = require('./JobDetail');
var JobIndexItem = require('./JobIndexItem');
var JobIndex = React.createClass({
  getInitialState: function() {
    return { jobs: [] };
  },
  _onChange: function () {
		this.setState({ jobs: JobStore.all() });
	},


  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this._onChange);
    ApiUtil.fetchJobs();
  },
  componentWillUnmount: function() {
    this.jobStoreToken.remove();
  },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
			// debugger;
      return <JobIndexItem key= {job.id} job = {job} />;

    });
    return (
      <div>
        <div className='logo'>

        </div>
        <div className="main-content">
          {jobs}
        </div>
      </div>
    );
  }
});
module.exports = JobIndex;

var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var JobDetail = require('./JobDetail');
var JobIndex = React.createClass({
  getInitialState: function() {
    // debugger;
    return { jobs: JobStore.all() };
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
      return <JobDetail key= {job.id} job = {job} />;

    });
    return (
      <div>
        {jobs}
      </div>
    );
  }
});
module.exports = JobIndex;

var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var JobStore = require('../stores/job');
var JobSearch = require('./JobSearch');
var FrontPage = React.createClass({
  getInitialState: function() {
    return {
      jobcount: null
    };
  },
  componentDidMount: function() {
    ApiUtil.fetchTodaysJobs();
    this.JobStoreToken = JobStore.addListener(this.setStateFromStore);
  },
  componentWillUnmount: function() {
      this.JobStoreToken.remove();
  },

  setStateFromStore: function () {

      this.setState({
        jobcount: JobStore.count()
      });

    },
  render: function() {

    return (
      <div>
        <div className="fontpage-content">
          <div className='logomain' />
          <JobSearch />
        </div>

        <Link to="/jobs?what=&where=">{this.state.jobcount} Jobs created today!</Link>
      </div>
    );
  }
});
module.exports = FrontPage;

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
        <div className="fontpage-jobcount">
          <Link to="/jobs?date=today&what=&where=">{this.state.jobcount} new Jobs posted today!</Link>
          <div className="frontpage-text"> This is a job searching website, inspired by <a href="http://www.indeed.com/">Indeed.com</a>. Thank you for visiting! <br/> To see my other projects, please visited <a href="http://www.leizhu.io/">leizhu.io</a></div>
        </div>
      </div>
    );
  }
});
module.exports = FrontPage;

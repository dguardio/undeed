var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var JobDetail = require('./JobDetail');
var JobIndexItem = require('./JobIndexItem');
var JobSearch = require('./JobSearch');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var ReactPaginate =require('react-paginate');
var JobIndex = React.createClass({
  getInitialState: function() {
    return {
      jobs: [],
      // pageNum: 1
    };
  },
  _onChange: function () {
		this.setState({
      jobs: JobStore.all(),
      // pageNum: Math.ceil(job.meta.total_count / job.meta.limit)
     });
	},


  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this._onChange);
    var city = this.props.location.query.where;
    var title = this.props.location.query.what;
    ApiUtil.searchJobs({whatField: title, whereField: city});
    // ApiUtil.searchJobsPaginate({whatField: title, whereField: city});
  },
  componentWillUnmount: function() {
    this.jobStoreToken.remove();
  },
  // handlePageClick :function (jobs){
  //   var selected = data.selected;
  //   var offset = Math.ceil(selected * 10);
  //
  //   this.setState(
  //     {offset: offset},
  //     this.loadCommentsFromServer();
  //   });
  // },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
			// debugger;
      return <JobIndexItem key={job.id} job={job} />;

    });
    // debugger;
      return (
        <div>
          <div className="search-bar group">
    			  <Link className="logo-link" to={"/"}><Logo /></Link>
            <div className="search-bar-search"><JobSearch /></div>
          </div>
          <div className="search-results">
            {jobs}
          </div>
        </div>
      );
  }
});
module.exports = JobIndex;

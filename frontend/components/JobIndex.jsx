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
      pageNum: 1,
      offset: JobStore.calculateOffset(),
      searched: false
    };
  },
  _onChange: function () {

		this.setState({
      jobs: JobStore.all(),
      pageNum: JobStore.numPage(),
     });
	},


  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this._onChange);
    var city = this.props.location.query.where;
    var title = this.props.location.query.what;
    var date = this.props.location.query.date;
    ApiUtil.searchJobsPaginate(
      {whatField: title, whereField: city, date: date},
      this.state.offset,
      function(){
        this.setState({searched:true});
      }.bind(this)
      );
  },
  componentWillUnmount: function() {
    this.jobStoreToken.remove();
  },
  handlePageClick :function (data){
    var city = this.props.location.query.where;
    var title = this.props.location.query.what;
    var offset = Math.ceil(data.selected * 10);
    this.setState(
      {offset: offset},
      ApiUtil.searchJobsPaginate({whatField: title, whereField: city}, offset)
    );
  },

  render: function() {
    var jobs = this.state.jobs.map(function(job) {
      return <JobIndexItem key={job.id} job={job} />;

    });
    var jobTitle = this.props.location.query.what || "' '";
    var jobLocation = this.props.location.query.where || "' '";

    if (jobs.length === 0 && this.state.searched === true){
      return(
        <div>
          <div className="search-bar group">
    			  <Link className="logo-link" to={"/"}><Logo /></Link>
            <div className="search-bar-search"><JobSearch /></div>
          </div>
          <div className="search-results">
            <div className="no-result">
              The search <b className="bold">{jobTitle}</b> jobs in <b className="bold">{jobLocation}</b> did not match any jobs
            </div>
              <ul className="search-suggestion">Search suggestions:
                <li>Try more general keywords</li>
                <li>Check your spelling</li>
                <li>Replace abbreviations with the entire word</li>
              </ul>
          </div>
        </div>
      );}
    else {
      return (
        <div>
          <div className="search-bar group">
    			  <Link className="logo-link" to={"/"}><Logo /></Link>
            <div className="search-bar-search"><JobSearch /></div>
          </div>
          <div className="search-results">
            {jobs}
          </div>
          <div className="react-paginate">
            <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         pageNum={this.state.pageNum}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         clickCallback={this.handlePageClick}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
          </div>
        </div>
      );
    }
  }
});
module.exports = JobIndex;

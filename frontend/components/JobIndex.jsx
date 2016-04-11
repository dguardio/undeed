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
      offset: JobStore.calculateOffset()
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
      ApiUtil.searchJobsPaginate({whatField: title, whereField: city, date: date},this.state.offset);
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
});
module.exports = JobIndex;

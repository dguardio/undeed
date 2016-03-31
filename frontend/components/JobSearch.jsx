var React = require('react');
var ApiUtil = require('../util/api_util');

var JobSeach = React.createClass({
  getInitialState: function() {
    return {
      whatField:"Engineer",
      whereField:"New York"
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    var whatwhere = Object.assign({}, this.state);
    // debugger;
    ApiUtil.searchJobs(whatwhere);
  },

  handleWhatFieldChange: function (e) {
    this.setState({ whatField: e.currentTarget.value });
    ApiUtil.searchName(e.currentTarget.value);
  },

  handleWhereFieldChange: function (e) {
    this.setState({ whereField: e.currentTarget.value });
  },
  render: function() {
    return (
      <div className="search-component">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>what:</label>
            <input className="searchField" type='text' onChange={this.handleWhatFieldChange} value={this.state.whatField} />
          </div>
          <div>
            <label>where:</label>
            <input className="searchField" type='text' onChange={this.handleWhereFieldChange} value={this.state.whereField}/>
          </div>
          <button className="search-button">Search Job</button>
          <br />
        </form>
      </div>
    );
  }

});

module.exports = JobSeach;

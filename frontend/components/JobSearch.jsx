var React = require('react');
var ApiUtil = require('../util/api_util');
var CityDropDown = require('./CityDropDown');

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
    ApiUtil.searchJobs(whatwhere);
  },

  handleWhatFieldChange: function (e) {
    this.setState({ whatField: e.currentTarget.value });
  },

  handleWhereFieldChange: function (e) {
    this.setState({ whereField: e.currentTarget.value });
    if (e.currentTarget.value.length > 0){
      ApiUtil.searchCity(e.currentTarget.value);
    }
  },
  setLocation: function(name){
    this.setState({ whereField: name});
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

        <CityDropDown setLocation={this.setLocation}/>
      </div>
    );
  }

});

module.exports = JobSeach;

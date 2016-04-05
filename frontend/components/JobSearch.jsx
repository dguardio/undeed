var React = require('react');
var ApiUtil = require('../util/api_util');
var CityDropDown = require('./CityDropdown');
var TitleDropDown = require('./TitleDropdown');
var JobSeach = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function() {
    return {
      whatField: "Engineer",
      whereField: "New York",
      whereVisible: false,
      whatVisible: false
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    var whatwhere = Object.assign({}, this.state);
    ApiUtil.searchJobs(whatwhere);
    this.context.router.push("/jobs");
  },

  handleWhatFieldChange: function (e) {
    // debugger;
    this.setState({ whatField: e.currentTarget.value });
    if (e.currentTarget.value.length > 0){
      ApiUtil.searchJobtitle(e.currentTarget.value);
      this.setState({ whatVisible: true });
    } else {
      this.setState({ whatVisible: false });
    }
  },

  handleWhereFieldChange: function (e) {
    this.setState({ whereField: e.currentTarget.value });
    if (e.currentTarget.value.length > 0){
      ApiUtil.searchCity(e.currentTarget.value);
      this.setState({ whereVisible: true });
    } else {
      this.setState({ whereVisible: false });
    }
  },
  setLocation: function(name){
    this.setState({whereField: name});
    this.setState({ whereVisible: false });
  },
  setJobTitle: function(name){
    this.setState({whatField: name});
    this.setState({ whatVisible: false });
  },
  render: function() {
    return (
      <div>
        <form className="search-component group" onSubmit={this.handleSubmit}>
          <div className="what-field">
            <label className="search-label">what:</label>
            <input className="searchfield-what" type='text' onChange={this.handleWhatFieldChange} value={this.state.whatField} />
            <TitleDropDown setTitle={this.setJobTitle} whatVisible={this.state.whatVisible}/>
          </div>
          <div className="where-field">
            <label className="search-label">where:</label>
            <input className="searchfield-where" type='text' onChange={this.handleWhereFieldChange} value={this.state.whereField}/>
            <CityDropDown setLocation={this.setLocation} whereVisible={this.state.whereVisible}/>
          </div>
          <button className="search-button">Find Jobs</button>
        </form>


      </div>
    );
  }

});

module.exports = JobSeach;

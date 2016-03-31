var React = require('react');
var ApiUtil = require('../util/api_util');
var CityDropDown = require('./CityDropDown');
var JobSeach = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function() {
    return {
      whatField:"Engineer",
      whereField:"New York",
      whereVisible: false
    };
  },

  handleSubmit: function(event){
    event.preventDefault();
    var whatwhere = Object.assign({}, this.state);
    ApiUtil.searchJobs(whatwhere);
    // debugger;
    this.context.router.push("/jobs");
  },

  handleWhatFieldChange: function (e) {
    this.setState({ whatField: e.currentTarget.value });
  },

  handleWhereFieldChange: function (e) {
    this.setState({ whereField: e.currentTarget.value });
    if (e.currentTarget.value.length > 0){
      ApiUtil.searchCity(e.currentTarget.value);
      this.setState({ whereVisible: true });
    }
  },
  setLocation: function(name){
    this.setState({whereField: name});
    this.setState({ whereVisible: false });
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

        <CityDropDown setLocation={this.setLocation} whereVisible={this.state.whereVisible}/>
      </div>
    );
  }

});

module.exports = JobSeach;

var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var CityStore = require('../stores/jobCity');



var CityDropDown  = React.createClass({
  getInitialState: function() {
    return { cities : []};
  },
  componentDidMount: function() {
    this.cityStoreToken = CityStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.cityStoreToken.remove();
  },

  setStateFromStore: function () {

    this.setState({ cities: CityStore.all()} );

  },
  render: function() {
    var cities = this.state.cities.map(function (location) {
      return (
        <li className="dropdown-location-list"
          onClick={this.props.setLocation.bind(null,location.city)}
          key={location.id} >
          {location.city}
        </li>);
    }.bind(this));
    if (this.props.whereVisible === true && cities.length > 0 ){
      return (
        <div className="dropdown-location">
          {cities}
        </div>
      );
    } else {
      return (
        <div>
        </div>
      );
  }
  }

});

module.exports = CityDropDown;

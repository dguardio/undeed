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
  handelClick: function(){
    // debugger;
    // this.props.setLocation.bind(null,location.city);
  },
  render: function() {
    var cities = this.state.cities.map(function (location) {
      // debugger;
      return (
        <li
          onClick={this.props.setLocation.bind(null,location.city)}
          key={location.id} >
          {location.city}
        </li>);
    }.bind(this));
    return (
      <div className="dropdown-location">
        {cities}
      </div>
    );
  }

});

module.exports = CityDropDown;

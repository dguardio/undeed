var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');



var TitleDropDown  = React.createClass({
  getInitialState: function() {
    return { titles : []};
  },
  componentDidMount: function() {
    this.jobStoreToken = JobStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.jobStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({ jobs: JobStore.all()} );
  },
  render: function() {
    var jobs = this.state.jobs.map(function (location) {
      return (
        <li className="dropdown-location-list"
          onClick={this.props.setLocation.bind(null,location.job)}
          key={location.id} >
          {location.job}
        </li>);
    }.bind(this));
    if (this.props.whatVisible === true && jobs.length > 0 ){
      return (
        <div className="dropdown-location">
          {jobs}
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

module.exports = TitleDropDown;

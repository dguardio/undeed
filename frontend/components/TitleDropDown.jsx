var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobTitleStore = require('../stores/jobTitle');



var TitleDropDown  = React.createClass({
  getInitialState: function() {
    return { jobTitles : []};
  },
  componentDidMount: function() {
    this.jobStoreToken = JobTitleStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.jobStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({ jobTitles: JobTitleStore.all()} );
  },
  render: function() {

    var keyNum = 0;
    var jobTitles = this.state.jobTitles.map(function (jobTitle) {
      keyNum++;
      var word = this.props.whatField;
      idx = jobTitle.toLowerCase().indexOf(word.toLowerCase());
      prestring = jobTitle.slice(0,idx);
      string = jobTitle.slice(idx, idx+ this.props.whatField.length);
      poststring = jobTitle.slice(idx+ this.props.whatField.length);

      return (
        <li className="dropdown-location-list"
          onClick={this.props.setTitle.bind(null,jobTitle)}
          key={keyNum} >
          {prestring}<strong className="boldItem">{string}</strong>{poststring}
        </li>);
    }.bind(this));
    if (this.props.whatVisible === true && jobTitles.length > 0 ){
      return (
        <div className="dropdown-location">
          {jobTitles}
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

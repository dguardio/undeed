var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var ErrorStore = require('../stores/Error');



var ErrorNotification = React.createClass({
  getInitialState: function() {
    return { error : ""};
  },
  componentDidMount: function() {
    this.errorStoreToken = ErrorStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.errorStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({ error: ErrorStore.all()} );
  },
  render: function() {
    var error = this.state.error;
    if (error){
      return (
        <div>{error}, please try again!</div>
      );
    }else{
      return(
        <div></div>
      );
    }

  }
});

module.exports = ErrorNotification;

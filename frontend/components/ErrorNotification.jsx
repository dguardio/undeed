var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var ErrorStore = require('../stores/errorNotification');



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
    var errors;
    if (this.state.error){
      errors = this.state.error.join(", ");
    }
    // debugger;
    if (errors){
      return (
        <div>{errors}, please try again!</div>
      );
    }else{
      return(
        <div></div>
      );
    }

  }
});

module.exports = ErrorNotification;

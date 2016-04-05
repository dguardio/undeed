var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var newJobForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      jobTitle: "",
      jobLocation:"",
      salary:"",
      jobDescription: "",
      user_id: "",
      isLoggedIn: false
    };
  },
  componentDidMount: function() {

    ApiUtil.fetchCurrentUser();
    this.setStateFromStore();
    this.sessionStoreToken = SessionStore.addListener(this.setStateFromStore);
  },
  setStateFromStore: function () {
    this.setState({
      user_id: SessionStore.currentUser().id,
      isLoggedIn: SessionStore.isLoggedIn(),

    });
  },

  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="input-block">
            <label htmlFor="jobTitle">Job Title</label>
            <input className="input-field" onChange={this.updateJobTitle} type="text" value={this.state.email}/>

            <label htmlFor="jobLocation">Job Location</label>
            <input className="input-field" onChange={this.updateJobLocation} type="password" value={this.state.password}/>

            <label htmlFor="jobTitle">Job Description</label>
            <input className="input-field" onChange={this.updateJobTitle} type="text" value={this.state.email}/>
          </div>
          <button className="signin-button">Sign In</button>
        </form>
      </div>
    );
  },
});

module.exports = newJobForm;

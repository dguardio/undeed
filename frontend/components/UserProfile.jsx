var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var Logo = require('./Logo');
var SessionStore = require('../stores/session');
var UserStore = require('../stores/user');
var UserProfile = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
  	return {user: {}};
  },

  componentDidMount: function (){
  	var user_id = SessionStore.currentUser().id;
    ApiUtil.fetchUser(user_id);
    this.UserStoreToken = UserStore.addListener(this.setStateFromStore);
  },
  componentWillUnmount: function () {
    this.UserStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({ user: UserStore.all()} );
  },

  render: function() {
    var user = this.state.user;
    if (user.resume_url === "/missing.pdf"){
      return (
        <div>
          <Link className= "signinlogo" to={"/"}><Logo /></Link>
          <ul className="update-user-list">
            <li>User Email: {user.email}</li>
            <li>Real Name: {user.real_name}</li>
            <li>No Resume uploaded!</li>
          </ul>
        </div>
      );
    }else {

      return (
        <div>
          <Link className= "signinlogo" to={"/"}><Logo /></Link>
          <ul className="update-user-list">
            <li>User Email: {user.email}</li>
            <li>Real Name: {user.real_name}</li>
          </ul>
          <iframe className="pdf-view" src={user.resume_url}></iframe>
        </div>
      );
    }
  },


});

module.exports = UserProfile;

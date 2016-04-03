var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require("../stores/session");
var ApiUtil = require('../util/api_util');

var UserHeader = React.createClass({
  getInitialState: function() {
    // debugger;
    return {
      currentUser : SessionStore.currentUser(),
      isLoggedIn : SessionStore.isLoggedIn()
    };
  },
  componentDidMount: function() {
    // debugger;
    this.setStateFromStore();
    this.sessionStoreToken = SessionStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      isLoggedIn: SessionStore.isLoggedIn()
    });
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleLogIn: function(){
    this.context.router.push("/login");
  },

  handleLogOut: function() {
    ApiUtil.logout();
    this.context.router.push("/");
  },
  render: function() {
    // debugger;
    if (this.state.isLoggedIn){
      // debugger;
      return (
        <div className="group">
          <div className="user-header">
            <div className="header-email">{this.state.currentUser.email}</div>
            <ul className="header-dropdown">
              <li><button onClick={this.handleLogOut}>Sign Out </button></li>
              <li><Link to={"/myjobs"}> My Jobs</Link></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className="group">
          <div className="user-header">
            <button onClick={this.handleLogIn}>Sign In</button>
          </div>
        </div>
      );
    }
  }

});

module.exports = UserHeader;

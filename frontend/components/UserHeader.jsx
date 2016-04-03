var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require("../stores/session");
var ApiUtil = require('../util/api_util');

var UserHeader = React.createClass({
  getInitialState: function() {
    return {
      currentUser : "",
      isLoggedIn : false
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
        <div>
          <button onClick={this.handleLogOut}>Sign Out </button>
          {this.state.currentUser.email}
          <Link to={"/myjobs"}> My Jobs</Link>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleLogIn}>Sign In</button>
        </div>
      );
    }
  }

});

module.exports = UserHeader;

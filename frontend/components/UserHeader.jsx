var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require("../stores/session");
var ApiUtil = require('../util/api_util');

var UserHeader = React.createClass({
  getInitialState: function() {
    return {
      currentUser : SessionStore.currentUser(),
      isLoggedIn : SessionStore.isLoggedIn(),
      classname:"user-hide"
    };
  },
  componentDidMount: function() {

    ApiUtil.fetchCurrentUser();
    this.setStateFromStore();
    this.sessionStoreToken = SessionStore.addListener(this.setStateFromStore);
  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      isLoggedIn: SessionStore.isLoggedIn(),
      classname: "user-hide"

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
  handleClick : function(){
    // debugger
    if (this.state.classname === "user-hide"){
      this.setState({classname:"user-show"});
    } else{
      this.setState({classname:"user-hide"});
    }
  },
  render: function() {
    // debugger;
    if (this.state.isLoggedIn){
      // debugger;
      return (
        <div className="the-header group">
          <div className="user-header">
            <div onClick={this.handleClick} className="header-email">{this.state.currentUser.email}</div>
            <ul className={this.state.classname}>
              <li><button onClick={this.handleLogOut}>Sign Out </button></li>
              <li><Link to={"/myjobs"}> My Jobs</Link></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className=" the-header group">
          <div className="user-header">
            <button onClick={this.handleLogIn}>Sign In</button>
          </div>
        </div>
      );
    }
  }

});

module.exports = UserHeader;

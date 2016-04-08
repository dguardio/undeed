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
    this.handleClick();
    this.context.router.push("/");
  },
  handleClick : function(){

    if (this.state.classname === "user-hide"){
      this.setState({classname:"user-show"});
    } else{
      this.setState({classname:"user-hide"});
    }
  },
  render: function() {

    if (this.state.isLoggedIn){

      return (
        <div className="the-header group">
          <div className="find-header"><Link to={"/newjob"}>Employer/Post a new Job</Link></div>
          <div className="user-header group">
            <div className="header-email"><Link to={"/userform"}>Upload resume</Link></div>
            <div className="header-email"><Link to={"/userprofile"}>My Profile</Link></div>
            <div onClick={this.handleClick} className="header-email">{this.state.currentUser.email}</div>
            <ul className={this.state.classname}>
              <li><button className="pointer" onClick={this.handleLogOut}>Sign Out </button></li>
              <li><Link onClick={this.handleClick} to={"/myjobs"}> My Jobs</Link></li>
            </ul>
          </div>
        </div>
      );
    } else {
      return (
        <div className=" the-header group">
          <div className="user-header">
            <button  className="pointer" onClick={this.handleLogIn}>Sign In</button>
          </div>
        </div>
      );
    }
  }

});

module.exports = UserHeader;

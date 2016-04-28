var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require("../stores/session");
var ApiUtil = require('../util/api_util');

var UserHeader = React.createClass({
  getInitialState: function() {
    return {
      currentUser : SessionStore.currentUser(),
      isLoggedIn : SessionStore.isLoggedIn(),
      emailToggle:"user-hide",
      headerToggle:"header-links-hide"
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
      emailToggle: "user-hide",
      headerToggle:"header-links-hide"

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
    if (this.state.emailToggle === "user-hide"){
      this.setState({emailToggle:"user-show"});
    }else{
      this.setState({emailToggle:"user-hide",});
    }
    if (this.state.headerToggle === "header-links-hide"){
      this.setState({headerToggle:"header-links"});
    }else{
      this.setState({headerToggle:"header-links-hide",});
    }
  },
    toHideClick : function(){
        this.setState({emailToggle:"user-hide", headerToggle:"header-links-hide",});
    },
  render: function() {
    var headerToggleName = this.state.headerToggle + " group";
    var emailToggleName = this.state.emailToggle + " group";
    if (this.state.isLoggedIn){

      return (

        <div className="the-header group">
          <div className="user-email group">
            <div onClick={this.handleClick} className="header-email"><a>{this.state.currentUser.email}</a></div>
            <ul className={emailToggleName}>
              <li className="go-left"><a onClick={this.handleLogOut}>Sign Out</a></li>
              <li className="go-right"><Link onClick={this.handleClick} to={"/myjobs"}> My Jobs</Link></li>
            </ul>
          </div>
          <div onClick={this.toHideClick} className={headerToggleName}>
            <div className="find-header group">
              <div className="header-email"><Link to={"/newjob"}>Employer/Post a new Job</Link></div>
              <div className="header-email"><Link to={"/postedjobs"}>My Posted Jobs</Link></div>
            </div>

            <div className="user-header group">
              <div className="header-email"><Link to={"/userform"}>Upload resume</Link></div>
              <div className="header-email"><Link to={"/userprofile"}>My Profile</Link></div>
            </div>
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

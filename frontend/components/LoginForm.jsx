var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var ErrorNotification = require('./ErrorNotification.jsx');
var LoginForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: "",
      validation: [],
    };
  },

  render: function() {
    return (
      <div>
			  <Link className= "signinlogo" to={"/"}><Logo /></Link>
        <div className="main">
          <div className="content group">
        		<section className="signin-block group">
        			<section className="main-signin">
              <h1 className="signin-title">Sign In</h1>
              <text className="link-to-sign-up">Not a member?<Link to={"/signup"}>Create an account free</Link></text>
              <form onSubmit={this.handleSubmit}>
      					<div className="input-block">
                  <label htmlFor="email">Email</label>
                  <input className="input-field" onChange={this.updateEmail} type="text" value={this.state.email}/>

                  <label htmlFor="password">Password</label>
                  <input className="input-field" onChange={this.updatePassword} type="password" value={this.state.password}/>
                  <div className="error">{this.state.validation.join(", ")}</div>
                  <div className="error"><ErrorNotification /></div>
      					</div>
                <button className="uibutton large addmargin">Sign In</button>
              </form>
      			   </section>
               <section className="facebook-signin">
                 <form onSubmit={this.handleGuestSubmit}>
                   <button className="uibutton large addmargin">Sign in as a guest</button>
                 </form>
                 <a className="uibutton large confirm addmargin" href="/auth/facebook">LOG IN WITH FACEBOOK</a>

               </section>
      			</section>
          </div>
        </div>
      </div>
    );
  },
  handleGuestSubmit: function(e) {
    e.preventDefault();
    var newState ={ email: "guest@guest.com", password: "guestguest" };
    this.setState(newState);

    var router = this.context.router;
    ApiUtil.login(newState, function() {
        router.goBack();
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var errors = [];
    if (this.state.email === ""){
      errors.push("Email cannot be blank");
    }
    if (this.state.password === ""){
      errors.push("Password cannot be blank");
    }else if (this.state.password.length < 6){
      errors.push("Password must have 6 characters or more");
    }
    this.setState({ validation: errors });
    var router = this.context.router;
    if (errors.length === 0){
      ApiUtil.login(this.state, function() {
          router.goBack();
      });
    }
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;

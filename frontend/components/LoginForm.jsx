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
      password: ""
    };
  },

  render: function() {
    return (
      <div>
			  <Link to={"/"}><Logo /></Link>
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
                  <ErrorNotification></ErrorNotification>
      					</div>
                <button className="signin-button">Sign In</button>
              </form>
      			   </section>
               <section className="facebook-signin">
                 <form onSubmit={this.handleGuestSubmit}>
                   <button className="signin-button">Sign in as a guest</button>
                 </form>
                 <button className="signin-button">Sign in with Facebook, Comming Soon...</button>

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
    // debugger;
    var router = this.context.router;
    ApiUtil.login(newState, function() {
        router.goBack();
    });
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var router = this.context.router;
    ApiUtil.login(this.state, function() {
        router.goBack();
    });
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = LoginForm;
var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var ErrorNotification = require('./ErrorNotification.jsx');
var SignupForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      validation:[],
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
                <h1 className="signin-title">Create an account</h1>
                <text className="link-to-sign-up">
                  Already have an account?
                  <Link to={"/login"}>Sign in</Link>
                </text>
                <form onSubmit={this.handleSubmit}>
        					<div className="signup-input-block">
                    <label htmlFor="email">Email</label>
                    <input className="input-field" onChange={this.updateEmail} type="text" value={this.state.email}/>

                    <label htmlFor="password">Password</label>
                    <input className="input-field" onChange={this.updatePassword} type="password" value={this.state.password}/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input className="input-field" onChange={this.updateConfirmPassword} type="password" value={this.state.confirmPassword}/>
                    {this.state.validation.join(", ")}
                    <ErrorNotification></ErrorNotification>
        					</div>
                  <button className="uibutton large addmargin">Create an account</button>
                </form>
             </section>
    			</section>
          </div>
        </div>
      </div>
    );
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
    }else if (this.state.password !== this.state.confirmPassword){
      errors.push("Passwords don't match");
    }
    this.setState({ validation: errors });


    var router = this.context.router;
    if (!errors){
      ApiUtil.signup(this.state, function() {
          router.push("/");
      });
    }
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  },

  updateConfirmPassword: function(e) {
    this.setState({ confirmPassword: e.currentTarget.value });
  }

});

module.exports = SignupForm;

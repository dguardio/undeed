var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var SignupForm = React.createClass({
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
                <h1 className="signin-title">Create an account</h1>
                <text className="link-to-sign-up">
                  Already have an account?
                  <Link to={"/login"}>Sign in</Link>
                </text>
                <form onSubmit={this.handleSubmit}>
        					<div className="input-block">
                    <label htmlFor="email">Email</label>
                    <input className="input-field" onChange={this.updateEmail} type="text" value={this.state.email}/>

                    <label htmlFor="password">Password</label>
                    <input className="input-field" onChange={this.updatePassword} type="password" value={this.state.password}/>
        					</div>
                  <button className="signin-button">Create an account</button>
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

    var router = this.context.router;
    ApiUtil.signup(this.state, function() {
      // debugger;
        router.push("/");
    });
  },

  updateEmail: function(e) {
    this.setState({ email: e.currentTarget.value });
  },

  updatePassword: function(e) {
    this.setState({ password: e.currentTarget.value });
  }

});

module.exports = SignupForm;

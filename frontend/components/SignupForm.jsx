var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
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
        <h1>Create an account</h1>
        <h3>Already have an account?</h3>
        <Link to={"/login"}>Signin</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this.updateEmail} type="text" value={this.state.email}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

          <button>Create an account</button>
        </form>
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

var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;

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
        <h1>Sign In</h1>
        <h3>Not a member?</h3>
        <Link to={"/signup"}>Create an account free</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input onChange={this.updateEmail} type="text" value={this.state.email}/>

          <label htmlFor="password">Password</label>
          <input onChange={this.updatePassword} type="password" value={this.state.password}/>

          <button>Submit</button>
        </form>
      </div>
    );
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

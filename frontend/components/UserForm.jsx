var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var Logo = require('./Logo');
var SessionStore = require('../stores/session');
var UserForm= React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      realName : "",
      resumeFile: null,
      resumeUrl: null
    };
  },
  componentDidMount: function() {
    ApiUtil.fetchCurrentUser();
  },

  render: function() {
    return (
      <div>
        <Link className= "signinlogo" to={"/"}><Logo /></Link>
        <div className="newjob-input-block">
        <form className="update-user-list" onSubmit={this.handleSubmit}>
          <label>Real Name
            <input className="user-form-input-field"
              type="text"
              placeholder="Enter your real name"
              onChange={this.handleRealNameChange}
              value={this.state.realName}
              />
          </label>
          <br/>
          <label>Resume
            <input className="user-form-input-field-file"
              type="file"
              onChange={this.handleFileChange}
              />
          </label>
          <br/>
          <input className="user-form-upload-button" type="submit" value="Upload"/>
        </form>
        </div>
        <p>Preview:</p>
        <iframe className="preview-resume" src={this.state.resumeUrl} />
      </div>
    );
  },
  handleRealNameChange: function (e) {
    this.setState({ realName: e.currentTarget.value });
  },
  handleFileChange: function (e) {
    var file = e.currentTarget.files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
      var result = reader.result;
      this.setState({ resumeFile: file, resumeUrl: result });
    }.bind(this);

    reader.readAsDataURL(file);
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("user[real_name]", this.state.realName);
    formData.append("user[resume]", this.state.resumeFile);
      var router = this.context.router;
    ApiUtil.updateUser(formData, function() {
        router.push("userprofile");
    });
  }


});

module.exports = UserForm;

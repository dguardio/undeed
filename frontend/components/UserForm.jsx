var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var UserForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      resumeFile: null,
      resumeUrl: null
    };
  },

  render: function() {
    return (
      <div>
        <Link className= "signinlogo" to={"/"}><Logo /></Link>
        <form onSubmit={this.handleSubmit}>
          <label>Resume
            <input
              type="file"
              onChange={this.handleFileChange}
              />
          </label>
          <br/>
          <input type="submit" value="Upload"/>
        </form>
        <p>Preview:</p>
        <img className="preview-resume" src={this.state.resumeUrl} />
      </div>
    );
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
    formData.append("user[resume]", this.state.imageFile);

    ApiUtil.createPost(formData, function() {
        router.push("/");
    });
  }


});

module.exports = UserForm;

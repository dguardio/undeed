var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var SessionStore = require("../stores/session");
var JobCityStore = require("../stores/jobCity");
var ErrorNotification = require('./ErrorNotification.jsx');
var JobForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      title: "",
      salary:"",
      description: "",
      location: "",
      error: [],
    };
  },

  updateJobTitle: function(e) {
    this.setState({ title: e.currentTarget.value });
  },
  updateJobLocation: function(e) {
    this.setState({ location: e.currentTarget.value});
  },
  updateJobDescription: function(e) {
    this.setState({ description: e.currentTarget.value });
  },
  updateJobSalary: function(e) {
    this.setState({ salary: e.currentTarget.value });
  },
  handleSubmit: function(e){
    e.preventDefault();
    var router = this.context.router;
    var jobObject = {
      title: this.state.title,
      salary: this.state.salary.replace(/,/g, ''),
      description: this.state.description,
      location: this.state.location
    };

    var errors = [];
    if (this.state.title === ""){
      errors.push("Title cannot be blank");
    }
    if (this.state.salary === ""){
      errors.push("Salary cannot be blank");
    }
    if (isNaN(this.state.salary.replace(/,/g, '')) === true){
      errors.push("Please enter a valid number in salary");
    }
    if (this.state.description === ""){
      errors.push("Description cannot be blank");
    }
    if (this.state.location === ""){
      errors.push("location cannot be blank");
    }
    this.setState({ error: errors });
    if (errors.length === 0){
      ApiUtil.createNewJob(jobObject, function(jobID) {
      router.push("/jobs/"+ jobID);
    });
    }
  },
  render: function() {
    var error = this.state.error.join(", ");
    // debugger;
    return (
      <div>
        <Link className= "signinlogo" to={"/"}><Logo /></Link>
        <div className="newjob-main">
          <div className="newjob-content group">
            <section className="signin-block group">
              <section className="main-signin">
                <h1>Create New Job!</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="newjob-input-block">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input className="input-field" onChange={this.updateJobTitle} type="text" value={this.state.title}/>

                    <label htmlFor="jobLocation">Job Location</label>
                    <input className="input-field" onChange={this.updateJobLocation} type="text" value={this.state.location}/>

                    <label htmlFor="Salary">Salary</label>
                    <input className="input-field" onChange={this.updateJobSalary} type="text" value={this.state.salary}/>

                    <label htmlFor="jobDescription">Job Description</label>
                    <textarea className="input-textarea" onChange={this.updateJobDescription} type="textarea" value={this.state.description}/>
                    <div className="error">{error}</div>
                    <div className="error"><ErrorNotification /></div>
                  </div>
                  <button className="uibutton large addmargin">Post New Job</button>
                </form>
             </section>
      		</section>
          </div>
        </div>
      </div>
    );
  },
});

module.exports = JobForm;

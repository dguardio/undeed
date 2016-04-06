var React = require('react');
var ApiUtil = require('../util/api_util');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var SessionStore = require("../stores/session");
var JobCityStore = require("../stores/jobCity");
var NewJobForm = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      title: "",
      // location_id:"",
      salary:"",
      description: "",
      location: ""
      // isLoggedIn: false
    };
  },
  componentDidMount: function() {
    // ApiUtil.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    // this.sessionStoreToken.remove();
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
    // debugger;
    // var location;
    // debugger;
    // ApiUtil.searchCity(this.state.location);
      // location = JobCityStore.findCity(this.state.location);
    // debugger;
    // if (!location){
    //   ApiUtil.createCity(this.state.location);
    //   location_id = location.id;
    // } else{
    //   location_id = location.id;
    // }
    // debugger;
    var jobObject = {
      title: this.state.title,
      salary: this.state.salary,
      description: this.state.description,
      location: this.state.location
    };



    var router = this.context.router;
    ApiUtil.createNewJob(jobObject, function(jobID) {
      // debugger;
        router.push("/jobs/"+ jobID);
    });
  },
  render: function() {
    return (
      <div>
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
            <input className="input-field" onChange={this.updateJobDescription} type="textarea" value={this.state.description}/>
          </div>
          <button className="signin-button">Post New Job</button>
        </form>
      </div>
    );
  },
});

module.exports = NewJobForm;

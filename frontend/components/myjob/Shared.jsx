var React = require('react');
var MyJobStore = require('../../stores/myJob');
var SessionStore = require('../../stores/session');
var ApiUtil = require('../../util/api_util');
var Link = require('react-router').Link;
var MyJobOptions = require('./MyJobOptions');
var Shared = React.createClass({
  getInitialState: function () {

    return this.getStateFromStore();
  },

  componentDidMount: function (){
    var currentUserId = SessionStore.currentUser().id;
    ApiUtil.fetchMyJobs(currentUserId);
    this.storeToken = MyJobStore.addListener(this.updateStateFromStore);
    this.storeToken2 = SessionStore.addListener(this.updateStateFromStore);
  },
  componentWillUnmount: function () {
    this.storeToken.remove();
    this.storeToken2.remove();
  },
  updateStateFromStore: function() {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function () {
    var currentUserId = SessionStore.currentUser().id;
    var myjobs = MyJobStore.find(this.props.type);
    return {
      myjobs: myjobs,
      currentUserId : currentUserId
    };
  },

  render: function() {
    var myjobs = this.state.myjobs.map(function(myjob){
      // debugger;
      return (
        <ul className="myjob-job" key={myjob.id}>
          <li><Link to={"/jobs/"+ myjob.job_id}> {myjob.job.title}</Link></li>
          <li>{myjob.job.employer}-{myjob.job.location}</li>
          <MyJobOptions myjob={myjob}/>
        </ul>
      );
    });
    return (
      <div>
        {myjobs}
      </div>
    );
  }

});

module.exports = Shared;

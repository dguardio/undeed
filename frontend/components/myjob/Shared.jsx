var React = require('react');
var MyJobStore = require('../../stores/myJob');
var SessionStore = require('../../stores/session');
var ApiUtil = require('../../util/api_util');
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
        <ul key={myjob.id}>
          <li>{myjob.job.employer}</li>
          <li>{myjob.job.location}</li>
          <li>{myjob.job.title}</li>
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

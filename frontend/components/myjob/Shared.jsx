var React = require('react');

var Shared = React.createClass({
  getInitialState: function () {

    return this.getStateFromStore();
  },

  componentDidMount: function (){
    this.storeToken = MyJobStore.addListener(this.updateStateFromStore);
    ApiUtil.fetchMyJobs(2);
  },

  updateStateFromStore: function() {
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function () {
    var myjobs = MyJobStore.find(this.props.type);
    return { myjobs: myjobs };
  },

  render: function() {
    return (
      <div>
        {this.state.myjobs.id}
      </div>
    );
  }

});

module.exports = Shared;

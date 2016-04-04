var React = require('react');
var ApiUtil = require('../../util/api_util');

var MyJobOptions = React.createClass({
  handleOnClick : function(status){
    var id = this.props.myjob.id;
    var job_id = this.props.myjob.job_id;
    var seeker_id = this.props.myjob.seeker_id;
    // debugger;
    ApiUtil.updateMyJobStatus(id,
      {
        id: id,
        status: status,
        job_id: job_id,
        seeker_id: seeker_id
      }
      // function(){
      // }
      );
  },
    handleRemove : function(e){
      e.preventDefault();
      var id = this.props.myjob.id;

      ApiUtil.destroyMyJob(id);
    },
  render: function() {
    return (
      <div className="myjobs-option">
        <li key="saved" onClick={this.handleOnClick.bind(null,"saved")}> Move to Saved</li>
        <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
        <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
        <li key="offerred" onClick={this.handleOnClick.bind(null,"offerred")}> Move to Offerred</li>
        <li key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
        <li key="visited" onClick={this.handleOnClick.bind(null,"visited")}> Move to Visited</li>
        <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
        <li key="delete" onClick={this.handleRemove}> Delete</li>
      </div>
    );
  }

});

module.exports = MyJobOptions;

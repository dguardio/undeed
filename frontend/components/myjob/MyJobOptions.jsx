var React = require('react');
var ApiUtil = require('../../util/api_util');

var MyJobOptions = React.createClass({
  handleOnClick : function(status){
    var id = this.props.myjob.id;
    var job_id = this.props.myjob.job_id;
    var seeker_id = this.props.myjob.seeker_id;
    ApiUtil.updateMyJobStatus(id,
      {
        id: id,
        status: status,
        job_id: job_id,
        seeker_id: seeker_id
      });
  },
    handleRemove : function(e){
      e.preventDefault();
      var id = this.props.myjob.id;

      ApiUtil.destroyMyJob(id);
    },
  render: function() {
    return (
      <div>
        <li onClick={this.handleOnClick.bind(null,"saved")}> Move to Saved</li>
        <li onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
        <li onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
        <li onClick={this.handleOnClick.bind(null,"offered")}> Move to Offered</li>
        <li onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
        <li onClick={this.handleOnClick.bind(null,"visited")}> Move to Visited</li>
        <li onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
        <li onClick={this.handleRemove}> Delete</li>
      </div>
    );
  }

});

module.exports = MyJobOptions;

var React = require('react');
var ApiUtil = require('../../util/api_util');

var MyJobOptions = React.createClass({
  getInitialState: function() {
    return {
      classname:"option-hide"
    };
  },
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
      });
  },
  handleRemove : function(e){
    e.preventDefault();
    var id = this.props.myjob.id;

    ApiUtil.destroyMyJob(id);
  },

  handleClick : function(){
    // debugger
    if (this.state.classname === "option-hide"){
      this.setState({classname:"option-show"});
    } else{
      this.setState({classname:"option-hide"});
    }
  },
  render: function() {
    var status = this.props.myjob.status;
    switch (status) {
      case "saved":
        return (
          <div className="myjobs-option">
            <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
            <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
            <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
            <li key="delete" onClick={this.handleRemove}> Delete</li>
          </div>
        );
      case "applied":
        return (
          <div className="myjobs-option">
            <li  key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
            <li onClick={this.handleClick}>Click to Show</li>
            <ul className={this.state.classname}>
              <li key="saved" onClick={this.handleOnClick.bind(null,"saved")}> Move to Saved</li>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
            </ul>
          </div>
        );
      case "interviewed":
        return (
          <div className="myjobs-option">
            <li key="offerred" onClick={this.handleOnClick.bind(null,"offerred")}> Move to Offerred</li>
            <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
            <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
            <li key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
          </div>
        );
      case "offerred":
        return (
          <div className="myjobs-option">
            <li key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
            <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
            <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
          </div>
        );
      case "hired":
        return (
          <div className="myjobs-option">
            <li key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
            <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
            <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
          </div>
        );
      case "visited":
        return (
          <div className="myjobs-option">
            <li key="saved" onClick={this.handleOnClick.bind(null,"saved")}> Move to Saved</li>
            <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
            <li key="delete" onClick={this.handleRemove}> Delete</li>
          </div>
        );
      case "archived":
        return (
          <div className="myjobs-option">
            <li key="visited" onClick={this.handleOnClick.bind(null,"visited")}> Move to Visited</li>
            <li key="delete" onClick={this.handleRemove}> Delete</li>
          </div>
        );
      default:
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

  }

});

module.exports = MyJobOptions;

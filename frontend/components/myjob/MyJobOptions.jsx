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
            <div className="myjobs-button">
              <li className="myjob-optionbutton" key="delete" onClick={this.handleRemove}> Delete</li>
              <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            </div>
            <ul className={this.state.classname}>
              <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
              <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewing</li>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Archived</li>
            </ul>
          </div>
        );
      case "applied":
        return (
          <div className="myjobs-option">
            <li  className="myjob-optionbutton" key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Got an interview?</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="saved" onClick={this.handleOnClick.bind(null,"saved")}> Move to Saved</li>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Archive</li>
            </ul>
          </div>
        );
      case "interviewed":
        return (
          <div className="myjobs-option">
            <li className="myjob-optionbutton" key="offerred" onClick={this.handleOnClick.bind(null,"offerred")}> I got an Offer</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
              <li key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
            </ul>
          </div>
        );
      case "offerred":
        return (
          <div className="myjobs-option">
            <li className="myjob-optionbutton" key="hired" onClick={this.handleOnClick.bind(null,"hired")}> I got Hired</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewing</li>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Archiv</li>
            </ul>
          </div>
        );
      case "hired":
        return (
          <div className="myjobs-option">
            <li className="myjob-optionbutton" key="hired" onClick={this.handleOnClick.bind(null,"hired")}> Move to Hired</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="archived" onClick={this.handleOnClick.bind(null,"archived")}> Move to Archived</li>
              <li key="interviewed" onClick={this.handleOnClick.bind(null,"interviewed")}> Move to Interviewed</li>
            </ul>
          </div>
        );
      case "visited":
        return (
          <div className="myjobs-option">
            <li className="myjob-optionbutton" key="saved" onClick={this.handleOnClick.bind(null,"saved")}> Save</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="applied" onClick={this.handleOnClick.bind(null,"applied")}> Move to Applied</li>
              <li key="delete" onClick={this.handleRemove}> Delete</li>
            </ul>
          </div>
        );
      case "archived":
        return (
          <div className="myjobs-option">
            <li className="myjob-optionbutton" key="visited" onClick={this.handleOnClick.bind(null,"visited")}> Move to Visited</li>
            <li className="myjob-dropdown" onClick={this.handleClick}>&#8595;</li>
            <ul className={this.state.classname}>
              <li key="delete" onClick={this.handleRemove}> Delete</li>
            </ul>
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

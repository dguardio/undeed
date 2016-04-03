var React = require('react');
var Shared = require('./Shared');
var MyJobApplied = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Applied!</h1>
        <Shared type="applied"></Shared>
      </div>
    );
  }

});

module.exports = MyJobApplied;

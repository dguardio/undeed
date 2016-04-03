var React = require('react');
var Shared = require('./Shared');
var MyJobHired = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Hired!</h1>
        <Shared type="hired"></Shared>
      </div>
    );
  }

});

module.exports = MyJobHired;

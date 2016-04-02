var React = require('react');
var Shared = require('./Shared');
var MyJobHired = React.createClass({
  render: function() {

    return (
      <div>
        Hired!
        <Shared type="hired"></Shared>
      </div>
    );
  }

});

module.exports = MyJobHired;

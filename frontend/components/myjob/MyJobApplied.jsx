var React = require('react');
var Shared = require('./Shared');
var MyJobApplied = React.createClass({
  render: function() {

    return (
      <div>
        Applied!
        <Shared type="applied"></Shared>
      </div>
    );
  }

});

module.exports = MyJobApplied;

var React = require('react');
var Shared = require('./Shared');
var MyJobVisited = React.createClass({
  render: function() {

    return (
      <div>
        Visited!
        <Shared type="visited"></Shared>
      </div>
    );
  }

});

module.exports = MyJobVisited;

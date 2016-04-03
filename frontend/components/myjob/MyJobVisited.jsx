var React = require('react');
var Shared = require('./Shared');
var MyJobVisited = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Visited!</h1>
        <Shared type="visited"></Shared>
      </div>
    );
  }

});

module.exports = MyJobVisited;

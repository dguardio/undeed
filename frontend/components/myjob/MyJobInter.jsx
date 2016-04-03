var React = require('react');
var Shared = require('./Shared');
var MyJobInter = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Interview!</h1>
        <Shared type="interviewed"></Shared>
      </div>
    );
  }

});

module.exports = MyJobInter;

var React = require('react');
var Shared = require('./Shared');
var MyJobArchived = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Archived!</h1>
        <Shared type="archived"></Shared>
      </div>
    );
  }

});

module.exports = MyJobArchived;

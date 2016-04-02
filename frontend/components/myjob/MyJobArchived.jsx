var React = require('react');
var Shared = require('./Shared');
var MyJobArchived = React.createClass({
  render: function() {

    return (
      <div>
        Archived!
        <Shared type="archived"></Shared>
      </div>
    );
  }

});

module.exports = MyJobArchived;

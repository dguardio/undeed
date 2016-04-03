var React = require('react');
var Shared = require('./Shared');
var MyJobOfferred = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Offered!</h1>
        <Shared type="offerred"></Shared>
      </div>
    );
  }

});

module.exports = MyJobOfferred;

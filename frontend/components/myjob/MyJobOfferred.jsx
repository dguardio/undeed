var React = require('react');
var Shared = require('./Shared');
var MyJobOfferred = React.createClass({
  render: function() {

    return (
      <div>
        Offerred!
        <Shared type="offerred"></Shared>
      </div>
    );
  }

});

module.exports = MyJobOfferred;

var React = require('react');
var Shared = require('./Shared');
var MyJobInter = React.createClass({
  render: function() {

    return (
      <div>
        Interviewed!
        <Shared type="interviewed"></Shared>
      </div>
    );
  }

});

module.exports = MyJobInter;

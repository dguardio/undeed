var React = require('react');
var Shared = require('./Shared');
var MyJobSaved = React.createClass({
  render: function() {

    return (
      <div>
        <h1 className="myjob-title">Saved!</h1>
        <Shared type="saved"></Shared>
      </div>
    );
  }

});

module.exports = MyJobSaved;

var React = require('react');
var Shared = require('./Shared');
var MyJobSaved = React.createClass({
  render: function() {

    return (
      <div>
        Saved!
        <Shared type="saved"></Shared>
      </div>
    );
  }

});

module.exports = MyJobSaved;

var React = require('react');
var ReactDOM = require('react-dom');


var JobSearch = require('./JobSearch');
var FrontPage = React.createClass({

  render: function() {
    // debugger;
    return (
      <div>
        <JobSearch />
      </div>
    );
  }
});
module.exports = FrontPage;

var React = require('react');
var ReactDOM = require('react-dom');


var JobSearch = require('./JobSearch');
var FrontPage = React.createClass({

  render: function() {
    
    return (
      <div>
        <div className="fontpage-content">
          <div className='logomain' />
          <JobSearch />
        </div>
      </div>
    );
  }
});
module.exports = FrontPage;

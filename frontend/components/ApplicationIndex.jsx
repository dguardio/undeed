var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require('../util/api_util');
var JobStore = require('../stores/job');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var JobSearch = require('./JobSearch');
var SessionStore = require("../stores/session");
var Modal = require("react-modal");
var MyJobStore = require('../stores/myJob');
var AppIndexItem = require('./AppIndexItem');


var ApplicationIndex = React.createClass({
	getInitialState: function () {
    return {
      jobId : this.props.params.jobId,
      apps : [],
      userId : null,
    };
	},

  componentDidMount: function (){
    this.applicationStoreToken = ApplicationStore.addListener(this._onChangeApp);
    this.sessionStoreToken = SessionStore.addListener(this._onChangeSession);
    ApiUtil.fetchCurrentUser();
    ApiUtil.fetchAppsWithJobID(this.state.jobId);
  },

  componentWillUnmount: function() {
    this.applicationStoreToken.remove();
    this.sessionStoreToken.remove();
  },
  _onChangeApp: function () {
		this.setState({
      apps: ApplicationStore.all(),
     });
	},
  _onChangeSession: function () {
		this.setState({
      userId: SessionStore.currentUser().id,
     });
	},

  render: function() {
    var apps = this.state.apps.map(function(app) {

      return <AppIndexItem key={app.id} app={app}/>;

    });
    return (
        <div>

    			  <Link className="logo-link" to={"/"}><Logo /></Link>

          <div className="search-results">
            {apps}
          </div>
        </div>
    );
  }

});

module.exports = ApplicationIndex;

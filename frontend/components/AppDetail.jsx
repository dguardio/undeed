var React = require('react');
var ApiUtil = require('../util/api_util');
var Logo = require('./Logo');
var Link = require('react-router').Link;
var JobStore = require('../stores/job');
var SessionStore = require("../stores/session");
var ApplicationStore = require("../stores/application");
var AppIndexItem = require('./AppIndexItem');


var AppDetail = React.createClass({
	getInitialState: function () {
    return {
      job : {},
      app : {},
      user :{},
    };
	},

  componentDidMount: function (){
    this.applicationStoreToken = ApplicationStore.addListener(this._onChangeApp);
    this.sessionStoreToken = SessionStore.addListener(this._onChangeSession);
    this.jobStoreToken = JobStore.addListener(this._onChangeJob);
    ApiUtil.fetchCurrentUser();
		var appId = parseInt(this.props.params.appId);
    // ApiUtil.fetchAppsWithAppID(appId);
		// ApiUtil.fetchSingleJob(this.state.app.job_id);
    ApiUtil.fetchAppsWithAppID(appId, function(){
			var app = ApplicationStore.all()[0];
			if (app){
				ApiUtil.fetchSingleJob(parseInt(app.job_id));
			}
		}.bind(this));

  },

  componentWillUnmount: function() {
    this.applicationStoreToken.remove();
    this.sessionStoreToken.remove();
    this.jobStoreToken.remove();
  },
  _onChangeApp: function () {
		this.setState({
      app: ApplicationStore.all()[0],
     });
	},
  _onChangeJob: function () {
		this.setState({
      job: JobStore.all()[0],
     });
	},
  _onChangeSession: function () {
		this.setState({
      user: SessionStore.currentUser(),
     });
	},

	isThereResume: function(){
		if (this.state.app.resume_url === "/missing.pdf" || this.state.app.resume_url === undefined ){
			return "resume not included";
		}else {
			return <iframe className="app-pdf-view" src={this.state.app.resume_url} download></iframe>;
		}
	},
		calculateDate : function(date){
			var oneDay = 24*60*60*1000;
			var today = new Date();
			var submittedDate = new Date(date);
			var diffDays = Math.round(Math.abs((submittedDate.getTime() - today.getTime())/(oneDay)));
			return diffDays;
		},
  render: function() {
    var app = this.state.app;
		var coverLetter = app.cover_letter;

		var resume = this.isThereResume();
		if (coverLetter === null){
			coverLetter = "Not included";
		}
    return (
        <div>
          <div className="search-bar group">
    			  <Link className="logo-link" to={"/"}><Logo /></Link>
            <div className="app-index-title">Application Detail</div>
          </div>
          <div className="search-results">
            Job : {this.state.job.title}<br />
						Applicant: {app.real_name}<br />
						Submiited: {this.calculateDate(app.updated_at)} day ago<br />
  					Email: {app.email}<br />
					  CoverLetter: {coverLetter}<br />
					{resume}
          </div>
        </div>
    );
  }

});

module.exports = AppDetail;

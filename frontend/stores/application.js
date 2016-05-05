var Store = require('flux/utils').Store;
var ApplicationConstants = require('../constants/application_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApplicationStore = new Store(AppDispatcher);
var _applications = [];

ApplicationStore.all = function () {
  return _applications.slice(0);
};
ApplicationStore.count = function (job_id){
  var count = 0;
  _applications.forEach(function(app){
    if (app.job_id === job_id){
      count += 1;
    }
  });
  return count;
};
var getApplication = function(application){
  _applications.push(application);

};
var resetApps = function(applications){
    _applications = applications;
};

var resetAppsWithJobId = function(applications, jobId){
    var result = [];
    // 
    applications.forEach(function(app){
      if (app.job_id === jobId)
        result.push(app);
    });
    _applications = result;
};
var resetAppsWithAppId = function(applications, appId){
    var result = [];
    applications.forEach(function(app){
      if (app.id === appId)
        result.push(app);
    });
    _applications = result;
};

ApplicationStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ApplicationConstants.APPLICATION_RECEIVED:
      getApplication(payload.application);
      ApplicationStore.__emitChange();
      break;
    case ApplicationConstants.APPLICATIONS_RECEIVED:
      resetApps(payload.applications);
      ApplicationStore.__emitChange();
      break;
    case ApplicationConstants.APPLICATIONSJOBID_RECEIVED:
      resetAppsWithJobId(payload.applications, payload.jobId);
      ApplicationStore.__emitChange();
      break;
    case ApplicationConstants.APPLICATIONSAPPID_RECEIVED:
      resetAppsWithAppId(payload.applications, payload.appId);
      ApplicationStore.__emitChange();
      break;
}
};
window.ApplicationStore = ApplicationStore;
module.exports = ApplicationStore;

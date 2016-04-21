var Store = require('flux/utils').Store;
var ApplicationConstants = require('../constants/application_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApplicationStore = new Store(AppDispatcher);
var _applications = [];

ApplicationStore.all = function () {
  return _applications.slice(0);
};

var getApplication = function(application){
  _applications.push(application);

};
var resetApps = function(applications){
    _applications = applications;
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
  }
};
window.ApplicationStore = ApplicationStore;
module.exports = ApplicationStore;

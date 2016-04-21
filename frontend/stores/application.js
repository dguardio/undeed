var Store = require('flux/utils').Store;
var ApplicationConstants = require('../constants/application_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ApplicationStore = new Store(AppDispatcher);
var _applications = [];

ApplicationStore.all = function () {
  return _applications.slice(0);
};

ApplicationStore.getApplication = function(application){

  _applications.push(application);

};

ApplicationStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ApplicationConstants.APPLICATION_RECEIVED:
      this.getApplication(payload.application);
      ApplicationStore.__emitChange();
      break;
  }
};
window.ApplicationStore = ApplicationStore;
module.exports = ApplicationStore;

var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ErrorStore = new Store(AppDispatcher);
var _errors = "";

ErrorStore.all = function () {
  return _errors.slice(12,-2);
};

ErrorStore.getError = function(error){
  _errors = error;
};

ErrorStore.__onDispatch = function (payload) {
  
  switch (payload.actionType) {
    case ErrorConstants.ERROR_RECEIVED:
      this.getError(payload.error.responseText);
      ErrorStore.__emitChange();
      break;
  }
};
window.ErrorStore = ErrorStore;
module.exports = ErrorStore;

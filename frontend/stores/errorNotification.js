var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var ErrorStore = new Store(AppDispatcher);
var _errors = "";

ErrorStore.all = function () {
  return _errors.slice(0);
};

ErrorStore.getError = function(error){

  _errors = error.message[0];
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.ERROR_RECEIVED:
      this.getError(payload.error.responseJSON);
      ErrorStore.__emitChange();
      break;
  }
};
window.ErrorStore = ErrorStore;
module.exports = ErrorStore;

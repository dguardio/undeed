var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorConstants = require('../constants/error_constants');

var ErrorActions = {

  errorReceived: function(error){
    AppDispatcher.dispatch({
      actionType: ErrorConstants.ERROR_RECEIVED,
      error: error
    });
  }
};

module.exports = ErrorActions;

var AppDispatcher = require('../dispatcher/dispatcher');
var ApplicationConstants = require('../constants/application_constants');

var ApplicationActions = {

  applicationReceived: function(application){
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATION_RECEIVED,
      application: application
    });
  }
};

module.exports = ApplicationActions;

var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');

var JobStoreActions = {

  resetReceived: function(){
    AppDispatcher.dispatch({
      actionType: JobConstants.RESET_RECEIVED,
    });
  }
};

module.exports = JobStoreActions;

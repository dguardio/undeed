var AppDispatcher = require('../dispatcher/dispatcher');
var ApplicationConstants = require('../constants/application_constants');

var ApplicationActions = {

  applicationReceived: function(application){
    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATION_RECEIVED,
      application: application
    });
  },
  applicationsReceived: function(applications){

    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATIONS_RECEIVED,
      applications: applications
    });
  },
  applicationsJobIdReceived: function(applications, jobId){

    AppDispatcher.dispatch({
      actionType: ApplicationConstants.APPLICATIONSJOBID_RECEIVED,
      applications: applications,
      jobId: jobId
    });
  }
};

module.exports = ApplicationActions;

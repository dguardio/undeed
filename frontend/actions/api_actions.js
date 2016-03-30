var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
ApiActions = {
  receiveAll: function(jobs){
    AppDispatcher.dispatch({
      actionType: JobConstants.JOBS_RECEIVED,
      jobs: jobs
    });
  },
	receiveSingleJob: function(job){
		AppDispatcher.dispatch({
			actionType: JobConstants.JOB_RECEIVED,
			job: job
		});
	}
};

module.exports = ApiActions;

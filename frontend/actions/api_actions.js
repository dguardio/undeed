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
	},
  searchAll: function(jobs, whatwhere){
    AppDispatcher.dispatch({
      actionType: JobConstants.JOBS_SEARCHED,
      jobs: jobs,
      whatwhere: whatwhere
    });
  }

};

module.exports = ApiActions;

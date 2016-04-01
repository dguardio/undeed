var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
ApiActions = {
  receiveMyJobs: function(myjobs){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.MYJOBS_RECEIVED,
      myjobs: myjobs
    });
  },
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
  },
  receiveCities: function(cities, cityString){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.CITIES_RECEIVED,
      cities: cities,
      cityString: cityString
    });
  }

};

module.exports = ApiActions;

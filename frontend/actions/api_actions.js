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
  receiveMyJob: function(myjob){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.MYJOB_RECEIVED,
      myjob: myjob
    });
  },
  removeMyJob: function(myjob){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.MYJOB_REMOVED,
      myjob: myjob
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
  },
  receiveCity: function(cities, cityString){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.CITY_RECEIVED,
      cities: cities,
      cityString: cityString
    });
  },
  receiveJobTitles: function(jobs, jobtitle){
    // debugger;
    AppDispatcher.dispatch({
      actionType: JobConstants.JOBTITLES_RECEIVED,
      jobs: jobs,
      jobtitle: jobtitle
    });
  },

};

module.exports = ApiActions;

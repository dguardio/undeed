var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
ApiActions = {
  receiveMyJobs: function(myjobs){
    AppDispatcher.dispatch({
      actionType: JobConstants.MYJOBS_RECEIVED,
      myjobs: myjobs
    });
  },
  receiveMyJob: function(myjob){
    AppDispatcher.dispatch({
      actionType: JobConstants.MYJOB_RECEIVED,
      myjob: myjob
    });
  },
  removeMyJob: function(myjob){
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
  searchLIMIT: function(jobs, whatwhere, limit, offset){
    AppDispatcher.dispatch({
      actionType: JobConstants.JOBS_SEARCHEDLIMIT,
      jobs: jobs,
      whatwhere: whatwhere,
      limit: limit,
      offset: offset
    });
  },
  receiveCities: function(cities, cityString){

    AppDispatcher.dispatch({
      actionType: JobConstants.CITIES_RECEIVED,
      cities: cities,
      cityString: cityString
    });
  },
  receiveSingleCity: function(city){

    AppDispatcher.dispatch({
      actionType: JobConstants.LOCATIONCITY_RECEIVED,
      city: city,
    });
  },
  receiveCity: function(cities, cityString){

    AppDispatcher.dispatch({
      actionType: JobConstants.CITY_RECEIVED,
      cities: cities,
      cityString: cityString
    });
  },
  receiveJobTitles: function(jobs, jobtitle){

    AppDispatcher.dispatch({
      actionType: JobConstants.JOBTITLES_RECEIVED,
      jobs: jobs,
      jobtitle: jobtitle
    });
  },

};

module.exports = ApiActions;

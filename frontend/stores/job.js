var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
var _jobs = [];
var JobStore = new Store(AppDispatcher);

JobStore.all = function () {
  return _jobs.slice(0);
};

JobStore.find = function(id) {
	for( var i = 0; i < _jobs.length; i++){
		if( _jobs[i].id == id) {
			return _jobs[i];
		}
	}
};
var resetJobs = function(jobs){
  _jobs = jobs;
};
var replaceJob = function(newJob){
	var replaced = false;
  _jobs = _jobs.map (function(job){
		if (job.id == newJob.id){
			replaced = true;
			return newJob;
		} else {
			return job;
		}
	});
	if (!replaced){
		_jobs.push(newJob);
	}
};
var searchJobs = function(jobs, whatwhere){
  _jobs = jobs;
  var searchedJobs = [];

  _jobs.forEach (function(job){
    if (job.location.city.includes(whatwhere.whereField) &&
        job.title.includes(whatwhere.whatField)){
      searchedJobs.push(job);
    }
  });

  _jobs = searchedJobs;
};

JobStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobConstants.JOBS_RECEIVED:
      resetJobs(payload.jobs);
      JobStore.__emitChange();
      break;
		case JobConstants.JOB_RECEIVED:
			replaceJob(payload.job);
			JobStore.__emitChange();
			break;
    case JobConstants.JOBS_SEARCHED:
      searchJobs(payload.jobs, payload.whatwhere);
      JobStore.__emitChange();
      break;
  }
};
window.JobStore = JobStore;

module.exports = JobStore;

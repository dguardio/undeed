var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobNameConstants = require('../constants/job_constants');
var _jobNames = [];
var JobNameStore = new Store(AppDispatcher);

JobName.all = function () {
  return _jobs.slice(0);
};

JobName.find = function(id) {
	for( var i = 0; i < _jobs.length; i++){
		if( _jobs[i].id == id) {
			return _jobs[i];
		}
	}
};
var resetJobs = function(jobs){
  _jobs = jobs;
};


JobName.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobConstants.JOBS_RECEIVED:
      resetJobs(payload.jobs);
      JobStore.__emitChange();
      break;
  }
};
window.JobStore = JobStore;

module.exports = JobStore;

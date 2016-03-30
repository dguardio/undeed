var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
var _jobs = [];
var JobStore = new Store(AppDispatcher);

JobStore.all = function () {
  return _jobs.slice(0);
};

var resetJobes = function(jobs){
  _jobs = jobs;
};


JobStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobConstants.JOBS_RECEIVED:
      resetJobes(payload.jobs);
      JobStore.__emitChange();
      break;
    }
};
window.JobStore = JobStore;

module.exports = JobStore;

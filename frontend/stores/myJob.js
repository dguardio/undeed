var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
var _myjobs = [];
var MyJobStore = new Store(AppDispatcher);

MyJobStore.all = function () {
  return _myjobs.slice(0);
};

MyJobStore.find = function (status) {
  var result = [];
  for( var i = 0; i < _myjobs.length; i++){
		if( _myjobs[i].status === status) {
			result.push(_myjobs[i]);
		}
	}
  return result;
};

MyJobStore.exist = function (jobId) {
  // debugger;
  for( var i = 0; i < _myjobs.length; i++){
		if( _myjobs[i].job_id === jobId) {
      console.log(true);
			return true;
		}
	}
  return false;
};
var resetMyJobs = function(jobs){
  _myjobs = jobs;
};
var updateMyJob = function(updatedMyJob){
	var replaced = false;
  _myjobs = _myjobs.map (function(myJob){
		if (myJob.id === updatedMyJob.id){
			replaced = true;
			return updatedMyJob;
		} else {
			return myJob;
		}
	});
	if (!replaced){
		_myjobs.push(updatedMyJob);
	}
};
var removeMyJob = function(removedMyJob){
  debugger;
  var newMyJobs = [];
  _myjobs.forEach (function(myJob){
		if (myJob.id !== removedMyJob.id){
			newMyJobs.push(myJob);
    }
  });
  _myjobs = newMyJobs;
};

MyJobStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobConstants.MYJOBS_RECEIVED:
      resetMyJobs(payload.myjobs);
      MyJobStore.__emitChange();
      break;
    case JobConstants.MYJOB_RECEIVED:
      updateMyJob(payload.myjob);
      MyJobStore.__emitChange();
      break;
    case JobConstants.MYJOB_REMOVED:
      removeMyJob(payload.myjob);
      MyJobStore.__emitChange();
      break;
  }
};
window.MyJobStore = MyJobStore;

module.exports = MyJobStore;

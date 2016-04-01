var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
var _myjobs = [];
var MyJobStore = new Store(AppDispatcher);

MyJobStore.all = function () {
  return _myjobs.slice(0);
};

MyJobStore.find = function (status) {
  // debugger;
  var result = [];
  for( var i = 0; i < _myjobs.length; i++){
		if( _myjobs[i].status === status) {
			result.push(_myjobs[i]);
		}
	}
  return result;
};
var resetMyJobs = function(jobs){
  _myjobs = jobs;
};

MyJobStore.__onDispatch = function (payload) {
  switch(payload.actionType) {

    case JobConstants.MYJOBS_RECEIVED:
        // debugger;
      resetMyJobs(payload.myjobs);
      MyJobStore.__emitChange();
      break;
  }
};
window.MyJobStore = MyJobStore;

module.exports = MyJobStore;

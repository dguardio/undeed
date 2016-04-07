var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobTitleConstants = require('../constants/job_constants');
var _jobTitles = [];
var JobTitleStore = new Store(AppDispatcher);

JobTitleStore.all = function () {
  return _jobTitles.slice(0);
};

JobTitleStore.find = function(id) {
	for( var i = 0; i < _jobTitles.length; i++){
		if( _jobTitles[i].id == id) {
			return _jobTitles[i];
		}
	}
};
var searchTitles = function(jobs, jobtitle){
  newjobTitles = [];
  var searchedTitles = [];
  var capJobtitle = jobtitle[0].toUpperCase() + jobtitle.slice(1);
  jobs.forEach (function(job){
    if ((!newjobTitles.includes(job.title) &&
    (job.title.toLowerCase().includes(jobtitle.toLowerCase())))){
      newjobTitles.push(job.title);
    }
  });
  
  _jobTitles = newjobTitles;
};

JobTitleStore.__onDispatch = function (payload) {
  
  switch(payload.actionType) {
    case JobTitleConstants.JOBTITLES_RECEIVED:
      searchTitles(payload.jobs, payload.jobtitle);
      JobTitleStore.__emitChange();
      break;
  }
};
window.JobTitleStore = JobTitleStore;

module.exports = JobTitleStore;

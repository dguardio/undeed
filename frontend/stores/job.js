var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobConstants = require('../constants/job_constants');
var _jobs = [];
var _numPage = 0;
var _PreviousPage = 0;
var _totalJob = 0;
var JobStore = new Store(AppDispatcher);
JobStore.total = function(){
  return _totalJob;
};
JobStore.all = function () {
  return _jobs.slice(0);
};
JobStore.numPage = function (){
  return _numPage;
};
JobStore.resetPage = function (){
  _PreviousPage = 0;
};
JobStore.calculateOffset = function(){
  return _PreviousPage*10;
};
JobStore.find = function(id) {
	for( var i = 0; i < _jobs.length; i++){
		if( _jobs[i].id == id) {
			return _jobs[i];
		}
	}
};
JobStore.count = function(){
  return( _jobs.length);
};

var resetPage = function(){
  _PreviousPage = 0;
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

var getJobsforEmployer = function(jobs, employer_id){
  _jobs = jobs;
  var employers_job = [];
  _jobs.forEach (function(job){
    if (job.employer_id === employer_id){
      employers_job.push(job);
    }
  });
  _jobs = employers_job;
};
var searchJobs = function(jobs, whatwhere){
  _jobs = jobs;
  var searchedJobs = [];
  _jobs.forEach (function(job){
    if (whatwhere.date === "today"){
        var today = new Date();
        var jobDate = new Date(job.created_at);
  			var oneDay = 24*60*60*1000;
  			var diffDays = Math.round(Math.abs((today.getTime() - jobDate.getTime())/(oneDay)));
      if (job.location.city.includes(whatwhere.whereField) &&
          job.title.includes(whatwhere.whatField)&& diffDays === 0){
        searchedJobs.push(job);
      }
    } else {
        if (job.location.city.includes(whatwhere.whereField) &&
            job.title.includes(whatwhere.whatField)){
          searchedJobs.push(job);
        }
    }
  });
  _jobs = searchedJobs;
};
var searchJobsLIMIT = function(jobs, whatwhere, limit, offset){
  _jobs = jobs;
  var searchedJobs = [];
  if(whatwhere.date === "recent"){
    jobs.sort(function(b, a) {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    });
    _jobs = jobs.slice(0,10);
  }

  _jobs.forEach (function(job){
    if (whatwhere.date === "today"){
        var today = new Date();
        var jobDate = new Date(job.created_at);
      if (job.location.city.includes(whatwhere.whereField) &&
          job.title.includes(whatwhere.whatField)&& today- jobDate < 86400000){
        searchedJobs.push(job);
      }
    }
    else {
        if (job.location.city.includes(whatwhere.whereField) &&
            job.title.includes(whatwhere.whatField)){
          searchedJobs.push(job);
        }
    }
  });
  _totaljob = _jobs.length;
  _numPage = Math.ceil(searchedJobs.length / 10);
  _PreviousPage = offset/10;
  _jobs = searchedJobs.slice(offset, offset+limit);
};
var searchTodaysJob = function(jobs){

  var searchedJobs = [];
    // debugger;
  jobs.forEach (function(job){
    // debugger;
    var today = new Date();
    var jobDate = new Date(job.created_at);
    // debugger;
    if (today- jobDate < 86400000){
      searchedJobs.push(job);
      // debugger;
    }
  });
  // debugger;
  _jobs = searchedJobs;
};

JobStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobConstants.JOBS_RECEIVED:
      resetJobs(payload.jobs);
      JobStore.__emitChange();
      break;
    case JobConstants.JOBS_RECEIVED_FOR_EMPLOYER:
      getJobsforEmployer(payload.jobs, payload.employer_id);
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
    case JobConstants.JOBS_SEARCHEDLIMIT:
      searchJobsLIMIT(payload.jobs, payload.whatwhere, payload.limit, payload.offset);
      JobStore.__emitChange();
      break;
    case JobConstants.TODAYS_JOBS_RECEIVED:
      searchTodaysJob(payload.jobs);
      JobStore.__emitChange();
      break;
    case JobConstants.RESET_RECEIVED:
      resetPage();
      JobStore.__emitChange();
      break;
  }
};
window.JobStore = JobStore;

module.exports = JobStore;

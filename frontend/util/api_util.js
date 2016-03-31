var JobActions = require('../actions/api_actions');
var ApiUtil = {
  fetchJobs: function(){
    $.ajax({
			url: '/api/jobs',
			method: 'GET',
			dataType: 'json',
			contentType: "application/json",

			success: function (jobs) {
        JobActions.receiveAll(jobs);
      },
      error: function(no){
        console.log("Error: " + no);
      }
		});
  },
	fetchSingleJob: function(id){
		$.ajax({
			url: '/api/jobs/'+ id,
			method: 'GET',
			dataType: 'json',
			contentType: "application/json",

			success: function (job) {
				// debugger;
				JobActions.receiveSingleJob(job);
			},
			error: function(no){
				console.log("Error: " + no);
			}
		});
	},
  searchJobs: function(whatwhere){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
          // debugger;
          JobActions.searchAll(jobs, whatwhere);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
  searchNames: function(whatwhere){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
          // debugger;
          JobActions.searchAll(jobs, whatwhere);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
};


window.ApiUtil = ApiUtil;

module.exports = ApiUtil;

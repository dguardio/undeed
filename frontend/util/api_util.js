var JobActions = require('../actions/api_actions');
var ApiUtil = {
  fetchJobs: function(){
    $.ajax({
			url: '/api/jobs',
			method: 'GET',
			dataType: 'json',
			contentType: "application/json",

			success: function (jobs) {
        // debugger;
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
  searchCity: function(cityString){
      $.ajax({
  			url: '/api/locations',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (cities) {
          // debugger;
          JobActions.receiveCities(cities, cityString);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
};

module.exports = ApiUtil;
window.ApiUtil = ApiUtil;

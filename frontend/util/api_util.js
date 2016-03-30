var JobActions = require('../actions/api_actions');
var ApiUtil = {
  fetchJobs: function(jobs){
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
  }
};


window.ApiUtil = ApiUtil;

module.exports = ApiUtil;

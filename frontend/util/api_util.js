var JobActions = require('../actions/api_actions');
var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');
var ApiUtil = {
  createCity: function(city){
      $.ajax({
        url: '/api/locations/',
        method: 'POST',
        data: {location: city},
        dataType: 'json',

        success: function (city) {
          JobActions.receiveSingleCity(city);
        },
        error: function(no){
          console.log("Error: " + no);
        }
      });
  },

  createNewJob: function(job,callback){
    // debugger;
      $.ajax({
        url: '/api/jobs/',
        method: 'POST',
        data: {job: job},
        dataType: 'json',

        success: function (job) {
          // debugger;
          var jobID = job.id;
          JobActions.receiveSingleJob(job);
          callback && callback(jobID);
        },
        error: function(no){

          console.log("Error: " + no);
        }
      });
  },
  fetchMyJobs: function(seeker_id){
    $.ajax({
      url: '/api/myjobs',
      method: 'GET',
      data:{seeker_id: seeker_id},
      dataType: 'json',
      contentType: "application/json",

      success: function (myjobs) {
        // debugger;
        JobActions.receiveMyJobs(myjobs);
      },
      error: function(no){
        // debugger;
        console.log("Error: " + no);
      }
    });
  },
  updateMyJobStatus: function(id, myjob){
      // debugger;
      $.ajax({
        url: '/api/myjobs/' + id,
        method: 'PATCH',
        data: {myjob: myjob},
        dataType: 'json',

        success: function (myjob) {
          JobActions.receiveMyJob(myjob);
          // callback && callback();
        },
        error: function(no){
          console.log("Error: " + no);
        }
      });
  },
    createMyJob: function(myjob){
        $.ajax({
          url: '/api/myjobs/',
          method: 'POST',
          data: {myjob: myjob},
          dataType: 'json',

          success: function (myjob) {
            JobActions.receiveMyJob(myjob);
            // callback && callback();
          },
          error: function(no){

            console.log("Error: " + no);
          }
        });
    },
    destroyMyJob: function(id){
        $.ajax({
          url: '/api/myjobs/' + id,
          method: 'DELETE',
          dataType: 'json',

          success: function (myjob) {
            JobActions.removeMyJob(myjob);
          },
          error: function(no){
            console.log("Error: " + no);
          }
        });
    },
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
      // debugger;
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
    searchJobsPaginate: function(cityString){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
        data     : {limit: 10, offset: 0},
  			dataType: 'json',

  			success: function (jobs) {
          // debugger;
          JobActions.searchAll(jobs, whatwhere);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
  searchJobtitle: function(jobtitle){
      // debugger;
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
          // debugger;
          JobActions.receiveJobTitles(jobs, jobtitle);
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
  			data: {limit: 10, offset: 0},

  			success: function (cities) {
          // debugger;
          JobActions.receiveCities(cities, cityString);
        },
        error: function(no){
          // debugger;
          console.log("Error: " + no);
        }
  		});
    },

    findExactCity: function(cityString){
        $.ajax({
    			url: '/api/locations',
    			method: 'GET',
    			dataType: 'json',
    			contentType: "application/json",

    			success: function (cities) {
            // debugger;
            JobActions.receiveCity(cities, cityString);
          },
          error: function(no){
            // debugger;
            console.log("Error: " + no);
          }
    		});
      },
    login: function(credentials, callback) {
      $.ajax({
        type: "POST",
        url: "/api/session",
        dataType: "json",
        data: credentials,
        success: function(currentUser) {
          SessionActions.currentUserReceived(currentUser);
          callback && callback();
        },
        error: function(error){
          ErrorActions.errorReceived(error);
        }
      });
    },
    signup: function(credentials, callback) {
      $.ajax({
        type: "POST",
        url: "/api/users",
        dataType: "json",
        data: credentials,
        success: function(currentUser) {
          SessionActions.currentUserReceived(currentUser);
          callback && callback();
        }
      });
    },

    logout: function() {
      $.ajax({
        type: "DELETE",
        url: "/api/session",
        dataType: "json",
        success: function() {
          SessionActions.logout();
        }
      });
    },

    fetchCurrentUser: function(completion) {
      $.ajax({
        type: "GET",
        url: "/api/session",
        dataType: "json",
        success: function(currentUser) {
          SessionActions.currentUserReceived(currentUser);
        },
        complete: function() {
          completion && completion();
        }
      });
    }
};

module.exports = ApiUtil;
window.ApiUtil = ApiUtil;

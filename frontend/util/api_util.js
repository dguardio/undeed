var JobActions = require('../actions/api_actions');
var SessionActions = require('../actions/session_actions');
var ErrorActions = require('../actions/error_actions');
var UserActions = require('../actions/user_actions');
var ApplicationActions = require('../actions/application_actions');
var ApiUtil = {
  createApplication: function(application){
    // debugger;
    $.ajax({
      url: '/api/applications/',
      method: 'POST',
      data: {application: application},
      dataType: 'json',
      success: function (application) {
        // debugger;
        ApplicationActions.applicationReceived(application);
      },
      error: function(no){
        console.log("Error: " + no);
      }
    });
  },
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
    updateUser: function(formData, callback) {
    $.ajax({
      url: '/api/users/',
      type: 'PATCH',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(user) {
        UserActions.updatedUserReceived(user);
        callback && callback();
      },
      error: function(no){
        console.log("Error: " + no);
      }
    });
  },
    fetchUser: function(id) {
    $.ajax({
      url: '/api/users/'+ id,
      type: 'get',
      processData: false,
      contentType: false,
      dataType: 'json',
      success: function(user) {
        UserActions.singleUserReceived(user);
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

          var jobID = job.id;
          JobActions.receiveSingleJob(job);
          callback && callback(jobID);
        },
        error: function(no){
          ErrorActions.errorReceived(no);
          console.log("Error: " + no);
        }
      });
  },
  fetchMyJobs: function(seeker_id,callback){
    $.ajax({
      url: '/api/myjobs',
      method: 'GET',
      data:{seeker_id: seeker_id},
      dataType: 'json',
      contentType: "application/json",

      success: function (myjobs) {
        JobActions.receiveMyJobs(myjobs);
        callback && callback();
      },
      error: function(no){
        console.log("Error: " + no);
      }
    });
  },
  updateMyJobStatus: function(id, myjob){
      $.ajax({
        url: '/api/myjobs/' + id,
        method: 'PATCH',
        data: {myjob: myjob},
        dataType: 'json',

        success: function (myjob) {
          JobActions.receiveMyJob(myjob);
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
    fetchJobsforEmployer: function(employer_id){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
          JobActions.receiveJobsforEmployer(jobs,employer_id);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
    fetchTodaysJobs: function(){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
          JobActions.receiveTodaysJob(jobs);
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
          JobActions.searchAll(jobs, whatwhere);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
    searchJobsPaginate: function(whatwhere, offset){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',

  			success: function (jobs) {
          JobActions.searchLIMIT(jobs, whatwhere, 10, offset);
        },
        error: function(no){
          console.log("Error: " + no);
        }
  		});
    },
  searchJobtitle: function(jobtitle){
      $.ajax({
  			url: '/api/jobs',
  			method: 'GET',
  			dataType: 'json',
  			contentType: "application/json",

  			success: function (jobs) {
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
          JobActions.receiveCities(cities, cityString);
        },
        error: function(no){
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
            JobActions.receiveCity(cities, cityString);
          },
          error: function(no){
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
    signup: function(userData, callback) {
      $.ajax({
        type: "POST",
        url: "/api/users",
        dataType: "json",
        data: {user: userData},
        success: function(currentUser) {
          SessionActions.currentUserReceived(currentUser);
          callback && callback();
        },
        error: function(error){

          ErrorActions.errorReceived(error);
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
          if (Object.keys(currentUser).length >0){
          SessionActions.currentUserReceived(currentUser);
          }
        },
        complete: function() {
          completion && completion();
        },
        error: function(no){
            console.log("Error: " + no);
        }
      });
    }
};

module.exports = ApiUtil;
window.ApiUtil = ApiUtil;

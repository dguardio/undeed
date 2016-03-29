var BenchActions = require('../actions/api_actions');
var ApiUtil = {
  fetchBenches: function(bounds){
    $.ajax({
			url: '/api/benches',
			method: 'GET',
      data: {bounds: bounds},
			dataType: 'json',
			contentType: "application/json",

			success: function (benches) {
        BenchActions.receiveAll(benches);
      },
      error: function(no){
        console.log("Error: " + no);
      }
		});
  }
};


window.ApiUtil = ApiUtil;

module.exports = ApiUtil;

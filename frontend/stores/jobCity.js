var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var JobCityConstants = require('../constants/job_constants');
var _jobCities = [];
var JobCityStore = new Store(AppDispatcher);

JobCityStore.all = function () {
  return _jobCities.slice(0);
};

JobCityStore.find = function(id) {
	for( var i = 0; i < _jobCities.length; i++){
		if( _jobCities[i].id == id) {
			return _jobCities[i];
		}
	}
};
var searchCities = function(cities, cityString){
  _jobCities = cities;
  var searchedCities = [];
  _jobCities.forEach (function(location){
    if (location.city.toLowerCase().includes(cityString.toLowerCase())){
      searchedCities.push(location);
    }
  });

  _jobCities = searchedCities;
};

JobCityStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case JobCityConstants.CITIES_RECEIVED:
      searchCities(payload.cities,payload.cityString);
      JobCityStore.__emitChange();
      break;
  }
};
window.JobCityStore = JobCityStore;

module.exports = JobCityStore;

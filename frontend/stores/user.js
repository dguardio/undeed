var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');

var UserStore = new Store(AppDispatcher);

var _user;
UserStore.all = function () {
  return _user;
};
UserStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case UserConstants.UPDATED_USER_RECEIVED:
      _user = payload.user;
      UserStore.__emitChange();
      break;
    case UserConstants.SINGLE_USER_RECEIVED:
      _user = payload.user;
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;

var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/user_constants');

var UserActions = {
  updatedUserReceived: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.UPDATED_USER_RECEIVED,
      user: user
    });
  },
  singleUserReceived: function(user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.SINGLE_USER_RECEIVED,
      user: user
    });
  },
};

module.exports = UserActions;

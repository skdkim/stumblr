var Store = require('react').Store;
var UserConstants = require('../constants/userConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _currentUser;
var _authErrors;

var UserStore = new Store(Dispatcher);

var addUser = function(user) {
  _currentUser = user;
  this.__emitChange();
};

var removeUser = function() {
  _currentUser = null;
};

var updateErrors = function(errors) {
  _authErrors = errors;
};

UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.LOGIN:
      addUser(payload.user);
      break;
    case UserConstants.LOGOUT:
      removeUser();
      break;
    case UserConstants.ERRORS:
      updateErrors(payload.errors);
      break;
  }
};

module.exports = UserStore;

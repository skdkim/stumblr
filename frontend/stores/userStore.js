var Store = require('flux/utils').Store;
var UserConstants = require('../constants/userConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _currentUser;
var _authErrors;

var UserStore = new Store(Dispatcher);

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.authErrors = function() {
  return _authErrors;
};

var addUser = function(user) {
  _currentUser = user;
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
  this.__emitChange();
};

module.exports = UserStore;

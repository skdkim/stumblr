var UserApiUtil = require('../../util/userApiUtil.js');
var UserConstants = require('../../constants/userConstants');
var Dispatcher = require('../../dispatcher/dispatcher');

 module.exports = {
   receiveCurrentUser: function(user) {
     Dispatcher.dispatch({
       actionType: UserConstants.LOGIN,
       user: user
     });
   },

   removeCurrentUser: function() {
     Dispatcher.dispatch({
       actionType: UserConstants.LOGOUT
     });
   },

   deleteUser: function(user) {
     Dispatcher.dispatch({
       actionType: UserConstants.LOGOUT,
       user: user
     });
   },

   handleError: function(error) {
     Dispatcher.dispatch({
       actionType: UserConstants.ERROR,
       errors: error.responseJSON.errors
     });
   }
 };

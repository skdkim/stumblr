var UserApiUtil = require('../../util/userApiUtil');

module.exports = {
  fetchCurrentUser: function() {
    UserApiUtil.fetchCurrentUser();
  },

  fetchAuthor: function(id) {
    UserApiUtil.fetchAuthor(id);
  },

  login: function(user) {
    UserApiUtil.login(user);
  },

  logout: function() {
    UserApiUtil.logout();
  },

  signUp: function(user) {
    UserApiUtil.signUp(user);
  },

  deleteUser: function() {
    UserApiUtil.deleteUser();
  },

  followUser: function(follower, followed) {
    UserApiUtil.followUser(follower, followed);
  }
};

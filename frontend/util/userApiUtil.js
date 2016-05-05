var UserServerActions = require('../actions/user/userServerActions');

module.exports = {
  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      url: 'api/session',
      success: function(user) {
        UserServerActions.receiveCurrentUser(user);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },

  fetchAuthor: function(id) {
    $.ajax({
      method: 'GET',
      url: 'api/user',
      data: {id: id},
      success: function(author) {
        UserServerActions.receiveAuthor(author);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });  },

  login: function(user) {
    $.ajax({
      method: 'POST',
      url: 'api/session',
      data: {user: {username: user.username, password: user.password}},
      success: function(loggedInUser) {
        UserServerActions.receiveCurrentUser(loggedInUser);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },

  logout: function() {
    $.ajax({
      method: 'DELETE',
      url: 'api/session',
      success: function() {
        UserServerActions.removeCurrentUser();
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },

  signUp: function(user) {
    $.ajax({
      method: 'POST',
      url: 'api/user',
      data: {user: user},
      success: function(signedUpUser) {
        UserServerActions.receiveCurrentUser(signedUpUser);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },

  deleteUser: function() {
    $.ajax({
      method: 'DELETE',
      url: 'api/user',
      success: function(user) {
        UserServerActions.removeCurrentUser();
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },

  followUser: function(follower, followed) {
    $.ajax({
      method: 'POST',
      url: 'api/followers',
      data: {follower: follower, followed: followed},
      success: function(currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  },


  // TODO: get follow id!
  unfollowUser: function(follower, followed) {
    $.ajax({
      method: 'DELETE',
      url: 'api/followers',
      data: {follower: follower, followed: followed},
      success: function(currentUser) {
        UserServerActions.receiveCurrentUser(currentUser);
      },
      error: function(error) {
        UserServerActions.handleError(error);
      }
    });
  }
};

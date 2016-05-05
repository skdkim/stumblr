var Store = require('flux/utils').Store;
var UserConstants = require('../constants/userConstants');
var LikeConstants = require('../constants/likeConstants');
var FollowConstants = require('../constants/followConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _currentUser;
var _author;
var _authErrors = [];

var UserStore = new Store(Dispatcher);

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.author = function() {
  return _author;
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

var updateAuthor = function(author) {
  _author = author;
};

var addLike = function(postId) {
  _currentUser.liked_posts.push(parseInt(postId));
};

var removeLike = function(postId) {
  var postIdx = _currentUser.liked_posts.indexOf(parseInt(postId));
  _currentUser.liked_posts.splice(postIdx, 1);
};

var addFollow = function(followerId, followedId) {
  _currentUser.followeds.push(parseInt(followedId));
};

var removeFollow = function(followerId, followedId) {
  var followedIdx = _currentUser.followeds.indexOf(parseInt(followedId));
  _currentUser.followeds.splice(followedIdx, 1);
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
    case UserConstants.AUTHOR_RECEIVED:
      updateAuthor(payload.author);
      break;
    case LikeConstants.LIKE_RECEIVED:
      addLike(payload.like.post_id);
      break;
    case LikeConstants.LIKE_REMOVED:
      removeLike(payload.like.post_id);
      break;
    case FollowConstants.FOLLOW_RECEIVED:
      addFollow(payload.follow.follower_id, payload.follow.followed_id);
      break;
    case FollowConstants.FOLLOW_REMOVED:
      removeFollow(payload.follow.follower_id, payload.follow.followed_id);
      break;
  }
  this.__emitChange();
};

module.exports = UserStore;

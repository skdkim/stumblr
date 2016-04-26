var Store = require('react').Store;
var PostConstants = require('../constants/postConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _posts = {};
var _postErrors;

var PostStore = new Store(Dispatcher);

var resetPosts = function(posts) {
  _posts = {};

  posts.forEach(function(post) {
    _posts[post.id] = post;
  });

  this.__emitChange();
};

var addPost = function(post) {
  _posts[post.id] = post;
  this.__emitChange();
};

var removePost = function(post) {
  delete _posts[post.id];
};

var updateErrors = function(errors) {
  _postErrors = errors;
};

PostStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      break;
    case PostConstants.POST_RECEIVED:
      addPost(payload.post);
      break;
    case PostConstants.POST_REMOVED:
      removePost(payload.post);
      break;
    case PostConstants.ERROR:
      updateErrors(payload.errors);
      break;
  }
};

module.exports = PostStore;

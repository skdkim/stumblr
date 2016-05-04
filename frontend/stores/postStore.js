var Store = require('flux/utils').Store;
var PostConstants = require('../constants/postConstants');
var LikeConstants = require('../constants/likeConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var _posts = {};
var _postErrors;

var PostStore = new Store(Dispatcher);

var resetPosts = function(posts) {
  _posts = {};

  posts.forEach(function(post) {
    _posts[post.id] = post;
  });
};

var addPost = function(post) {
  _posts[post.id] = post;
};

var removePost = function(post) {
  delete _posts[post.id];
};

var addLike = function(postId, userId) {
  _posts[postId].liking_users.push(parseInt(userId));
};

var removeLike = function(postId, userId) {
  var userIdx = _posts[postId].liking_users.indexOf(parseInt(userId));
  _posts[postId].liking_users.splice(userIdx, 1);
};

var updateErrors = function(errors) {
  _postErrors = errors;
};

PostStore.all = function() {
  return Object.keys(_posts).reverse().map(function(id){
    return _posts[id];
  });
};

PostStore.find = function(id) {
  return _posts[id];
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
    case LikeConstants.LIKE_RECEIVED:
      addLike(payload.like.post_id, payload.like.user_id);
      break;
    case LikeConstants.LIKE_REMOVED:
      removeLike(payload.like.post_id, payload.like.user_id);
      break;
  }
  this.__emitChange();
};

module.exports = PostStore;

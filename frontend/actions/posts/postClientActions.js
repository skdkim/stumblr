var PostApiUtil = require('../../util/postsApiUtil.js');

module.exports = {
  fetchPosts: function(params) {
    PostApiUtil.fetchPosts(params);
  },

  getPost: function(id) {
    PostApiUtil.getPost(id);
  },

  createPost: function(post) {
    PostApiUtil.createPost(post);
  },

  editPost: function(post) {
    PostApiUtil.updatePost(post);
  },

  deletePost: function(id) {
    PostApiUtil.deletePost(id);
  }
};

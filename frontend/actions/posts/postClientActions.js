var PostApiUtil = require('../../util/postsApiUtil.js');

module.exports = {
  fetchPosts: function() {
    PostApiUtil.fetchPosts();
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

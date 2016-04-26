var PostsServerActions = require('../actions/postsServerActions.js');

module.exports = {
  fetchPosts: function() {
    $.ajax({
      method: 'GET',
      url: 'api/posts',
      success: function(posts) {
        PostsServerActions.receivePosts(posts);
      },
      error: function(error) {
        PostsServerActions.handleError(error);
      }
    });
  },

  getPost: function(postId) {
    $.ajax({
      method: 'GET',
      url: 'api/posts/' + postId,
      success: function(post) {
        PostsServerActions.receivePost(post);
      },
      error: function(error) {
        PostsServerActions.handleError(error);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      method: 'POST',
      url: 'api/posts',
      data: {post: post},
      success: function(newPost) {
        PostsServerActions.receivePost(post);
      },
      error: function(error) {
        PostsServerActions.handleError(error);
      }
    });
  },

  updatePost: function(post) {
    $.ajax({
      method: 'PATCH',
      url: 'api/posts/' + post.id,
      data: {post: {
        title: post.title,
        body: post.body,
        content_id: post.content_id,
      }},
      success: function(updatedPost) {
        PostsServerActions.receivePost(post);
      },
      error: function(error) {
        PostsServerActions.handleError(error);
      }
    });
  },

  deletePost: function(postId) {
    $.ajax({
      method: 'DELETE',
      url: 'api/posts',
      success: function(post) {
        PostsServerActions.removePost(post);
      },
      error: function(error) {
        PostsServerActions.handleError(error);
      }
    });
  }
};

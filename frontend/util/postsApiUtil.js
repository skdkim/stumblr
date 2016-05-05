var PostServerActions = require('../actions/posts/postServerActions.js');

module.exports = {
  fetchPosts: function(params) {
    $.ajax({
      method: 'GET',
      url: 'api/posts',
      data: params,
      success: function(posts) {
        PostServerActions.receivePosts(posts);
      },
      error: function(error) {
        PostServerActions.handleError(error);
      }
    });
  },

  getPost: function(postId) {
    $.ajax({
      method: 'GET',
      url: 'api/posts/' + postId,
      success: function(post) {
        PostServerActions.receivePost(post);
      },
      error: function(error) {
        PostServerActions.handleError(error);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      method: 'POST',
      url: 'api/posts',
      data: {post: post},
      success: function(newPost) {
        PostServerActions.receivePost(newPost);
      },
      error: function(error) {
        PostServerActions.handleError(error);
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
        content_url: post.content_url,
        tags: post.tags
      }},
      success: function(updatedPost) {
        PostServerActions.receivePost(post);
      },
      error: function(error) {
        PostServerActions.handleError(error);
      }
    });
  },

  deletePost: function(postId) {
    $.ajax({
      method: 'DELETE',
      url: 'api/posts/' + postId,
      success: function(post) {
        PostServerActions.removePost(post);
      },
      error: function(error) {
        PostServerActions.handleError(error);
      }
    });
  }
};

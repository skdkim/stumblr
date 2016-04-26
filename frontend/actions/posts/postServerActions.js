var PostApiUtil = require('../../util/userApiUtil.js');
var PostConstants = require('../../constants/userConstants');
var Dispatcher = require('../../dispatcher/dispatcher');

 module.exports = {
   receivePosts: function(posts) {
     Dispatcher.dispatch({
       actionType: PostConstants.POSTS_RECEIVED,
       posts: posts
     });
   },

   receivePost: function(post) {
     Dispatcher.dispatch({
       actionType: PostConstants.POST_RECEIVED,
       post: post
     });
   },

   removePost: function(post) {
     Dispatcher.dispatch({
       actionType: PostConstants.POST_REMOVED,
       post: post
     });
   },

   handleError: function(error) {
     Dispatcher.dispatch({
       actionType: PostConstants.ERROR,
       errors: error.responseJSON.errors
     });
   }
 };

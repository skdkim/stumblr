var LikeApiUtil = require('../util/likeApiUtil');
var LikeConstants = require('../constants/likeConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var LikeActions = {
  createLike: function(like) {
    LikeApiUtil.createLike(like, this.receiveLike);
  },

  deleteLike: function(like) {
    LikeApiUtil.deleteLike(like, this.removeLike);
  },



  receiveLike: function(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function(like) {
    Dispatcher.dispatch({
      actionType: LikeConstants.LIKE_REMOVED,
      like: like
    });
  }
};

module.exports = LikeActions;

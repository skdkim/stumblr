var LikeApiUtil = require('../util/likeApiUtil');
var LikeConstants = require('../constants/likeConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var LikeActions = {
  createLike: function(likeData) {
    LikeApiUtil.createLike(likeData, this.receiveLike);
  },

  deleteLike: function(likeData) {
    LikeApiUtil.deleteLike(likeData, this.removeLike);
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

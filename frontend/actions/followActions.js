var FollowApiUtil = require('../util/followApiUtil');
var FollowConstants = require('../constants/followConstants');
var Dispatcher = require('../dispatcher/dispatcher');

var FollowActions = {
  createFollow: function(followData) {
    FollowApiUtil.createFollow(followData, this.receiveFollow);
  },

  deleteFollow: function(followData) {
    FollowApiUtil.deleteFollow(followData, this.removeFollow);
  },



  receiveFollow: function(follow) {
    Dispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_RECEIVED,
      follow: follow
    });
  },

  removeFollow: function(follow) {
    Dispatcher.dispatch({
      actionType: FollowConstants.FOLLOW_REMOVED,
      follow: follow
    });
  }
};

module.exports = FollowActions;

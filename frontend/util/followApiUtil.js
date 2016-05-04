module.exports = {
  createFollow: function(follow, success) {
    $.ajax({
      method: 'POST',
      url: 'api/followers',
      data: {follow: follow},
      success: success,
    });
  },

  deleteFollow: function(follow, success) {
    $.ajax({
      method: 'DELETE',
      url: 'api/followers',
      data: {follow: follow},
      success: success
    });
  }
};

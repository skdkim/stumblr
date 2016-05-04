module.exports = {
  createLike: function(like, success) {
    $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: {like: like},
      success: success,
    });
  },

  deleteLike: function(like, success) {
    $.ajax({
      method: 'DELETE',
      url: 'api/likes',
      data: {like: like},
      success: success
    });
  }
};

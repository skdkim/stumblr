var UserStore = require('../stores/userStore');
var hashHistory = require('react-router').hashHistory;

var RequireSignedInMixin = {
  componentWillMount: function() {
    if (!this.state.currentUser) {
      this.redirectToLanding();
    }
  },

  redirectToLanding: function() {
    hashHistory.push('/landing');
  },

  componentWillUnmount: function() {
    delete this.userListener;
  },
};


module.exports = RequireSignedInMixin;

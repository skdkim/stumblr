var UserStore = require('../stores/userStore');
var UserClientActions = require('../actions/user/userClientActions');

var CurrentUserStateMixin = {
  getInitialState: function() {
    return {
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    };
  },

  componentWillMount: function() {
    this.userListener = UserStore.addListener(this.updateUser);
    if (!this.state.currentUser) {
      UserClientActions.fetchCurrentUser();
    }
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  }
};

module.exports = CurrentUserStateMixin;

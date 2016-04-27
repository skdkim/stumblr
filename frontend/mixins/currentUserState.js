var UserStore = require('../stores/userStore');
var UserClientActions = require('../actions/user/userClientActions');

var CurrentUserStateMixin = {
  getInitialState: function() {
    return {
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    };
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
    if (!this.state.currentUser) {
      UserClientActions.fetchCurrentUser();
    }
  },

  updateUser: function() {
    this.setState({
      currentUser: UserStore.currentUser(),
      authErrors: UserStore.authErrors()
    });
  }
};

module.exports = CurrentUserStateMixin;

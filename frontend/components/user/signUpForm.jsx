var React = require('react');
var UserClientActions = require('../../actions/user/userClientActions');
var UserStore = require('../../stores/userStore');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var hashHistory = require('react-router').hashHistory;

var SignUpForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },

  updateUsername: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  updatePassword: function(e) {
    this.setState({
      password: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    UserClientActions.signUp({
      username: this.state.username,
      password: this.state.password
    });

    this.setState({
      username: "",
      password: ""
    });
  },

  logout: function(e) {
    UserClientActions.logout();
    hashHistory.push('/login');
  },

 	render: function () {
    if (this.state.currentUser) {
      return(
        <div>
          Hello, {this.state.currentUser.username}!
          <button onClick={this.logout}>Log Out</button>
        </div>
      );
    } else {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.username}
              placeholder="username" onChange={this.updateUsername} />

            <input type="text" value={this.state.password}
              placeholder="password" onChange={this.updatePassword} />

            <input type="submit" value="Sign Up"/>
          </form>
        </div>
      );
    }
 	}
 });



 module.exports = SignUpForm;

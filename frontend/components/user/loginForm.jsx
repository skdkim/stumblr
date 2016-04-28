var React = require('react');
var UserClientActions = require('../../actions/user/userClientActions');
var UserStore = require('../../stores/userStore');
var CurrentUserStateMixin = require('../../mixins/currentUserState');

var LoginForm = React.createClass({
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

    UserClientActions.login({
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
  },

  errors: function() {
    return (
      <div>
        {this.state.authErrors.map(function(error){
          return <div key={error}>{error}</div>;
        })}
      </div>
    );
  },

 	render: function () {
    var errors;
    if (this.state.authErrors.length > 0) {
      errors = this.errors();
    }

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
          <form className="auth-form" onSubmit={this.handleSubmit}>
            {errors}

            <input className="auth-input" type="text" value={this.state.username}
              placeholder="username" onChange={this.updateUsername} />

            <input className="auth-input" type="password" value={this.state.password}
              placeholder="password" onChange={this.updatePassword} />

            <input className="auth-input submit" type="submit" value="Log In"/>
          </form>
        </div>
      );
    }
 	}
 });



 module.exports = LoginForm;

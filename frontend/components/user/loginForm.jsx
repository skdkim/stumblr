var React = require('react');
var UserClientActions = require('../../actions/user/userClientActions');
var UserStore = require('../../stores/userStore');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;

var LoginForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      username: "",
      password: ""
    };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.pushToDash);
    this.pushToDash();
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  pushToDash: function() {
    if (UserStore.currentUser()) {
      HashHistory.push('/dashboard');
    }
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

  guestLogin: function(e) {
    e.preventDefault();

    UserClientActions.login({
      username: "guest",
      password: "guestlogin"
    });

    this.setState({
      username: "",
      password: ""
    });
  },

  errors: function() {
    return (
      <div className="errors">
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

    return(
      <div className="landing-container">
        <form onSubmit={this.handleSubmit}>
          {errors}

          <input className="auth-input" type="text" value={this.state.username}
            placeholder="username" onChange={this.updateUsername} autoFocus />

          <input className="auth-input" type="password" value={this.state.password}
            placeholder="password" onChange={this.updatePassword} />

          <input className="auth-input submit" type="submit" value="Log In"/>
          <input className="auth-input guest-login" type="submit"
            onClick={this.guestLogin} value="Guest Login"/>
        </form>
      </div>
    );
  }

 });



 module.exports = LoginForm;

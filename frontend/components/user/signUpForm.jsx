var React = require('react');
var UserClientActions = require('../../actions/user/userClientActions');
var UserStore = require('../../stores/userStore');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;

var SignUpForm = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      username: "",
      password: "",
    };
  },

  componentDidMount: function() {
    this.listener = UserStore.addListener(this.pushToDash);
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
    HashHistory.push('/login');
  },

  errors: function() {
    return (
      <div className="errors">
        {this.state.authErrors.map(function(error){
          return <div key={error.id}>{error}</div>;
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
        <div className="landing-container">
          <form onSubmit={this.handleSubmit}>
            {errors}

            <input className="auth-input" type="text" value={this.state.username}
              placeholder="username" onChange={this.updateUsername}  id="focus"/>

            <input className="auth-input" type="password" value={this.state.password}
              placeholder="password" onChange={this.updatePassword} />

            <input className="auth-input submit" type="submit" value="Sign Up"/>
          </form>
        </div>
      );
    }
 	}
 });



 module.exports = SignUpForm;

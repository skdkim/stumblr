var React = require('react');
var UserClientActions = require('../../actions/user/userClientActions');

var LoginForm = React.createClass({
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

 	render: function () {
 		return(
 			<div>
 				<form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" value={this.state.username} onChange={this.updateUsername} />
          </label>

          <label>Password
            <input type="text" value={this.state.password} onChange={this.updatePassword} />
          </label>

          <input type="submit" value="Log In"/>
 				</form>
 			</div>
 		);
 	}
 });



 module.exports = LoginForm;

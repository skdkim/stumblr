var React = require('react');
var hashHistory = require('react-router').hashHistory;

var Landing = React.createClass({
  pushToSignUp: function() {
    hashHistory.push('/signup');
  },

  pushToLogIn: function() {
    hashHistory.push('/login');
  },

  pushToPublicFeed: function() {
    hashHistory.push('/explore');
  },

  render: function() {
    return (
      <div className="page-container">
        <button className="landing-button" onClick={this.pushToSignUp}>Get Started</button>
        <button className="landing-button" onClick={this.pushToLogIn}>Log In</button>
        <p onClick={this.pushToPublicFeed}>Here's what's trending now</p>
      </div>
    );
  }
});


module.exports = Landing;

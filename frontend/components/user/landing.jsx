var React = require('react');
var HashHistory = require('react-router').hashHistory;
var UserStore = require('../../stores/userStore');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var BackgroundImageSource = require('../../util/backgroundImageSource');





var Landing = React.createClass({
  mixins: [CurrentUserStateMixin],

  componentWillMount: function() {
    var imgUrl = BackgroundImageSource.returnImgSource();

    this.divStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    };

    this.pushToDash();
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

  pushToSignUp: function() {
    HashHistory.push('/signup');
  },

  pushToLogIn: function() {
    HashHistory.push('/login');
  },

  pushToPublicFeed: function() {
    HashHistory.push('/explore');
  },

  render: function() {

    return (
      <div className="landing-container" style={this.divStyle}>
        <button className="landing-button" onClick={this.pushToSignUp}>Get Started</button>
        <button className="landing-button" onClick={this.pushToLogIn}>Log In</button>
        <p onClick={this.pushToPublicFeed}>Here's what's trending now</p>
      </div>
    );
  }
});


module.exports = Landing;

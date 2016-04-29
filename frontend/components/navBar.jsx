var React = require('react');
var SearchBar = require('./search/searchBar');
var NavIconBar = require('./navIconBar');
var UserClientActions = require('../actions/user/userClientActions');
var CurrentUserStateMixin = require('../mixins/currentUserState');

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  userProfile: function() {
    if (this.state.currentUser) {
      return (
        <div className="nav-right">
          Hello,&nbsp;{this.state.currentUser.username}!
          <button onClick={this.logout}>Log Out</button>
        </div>
      );
    } else {
      return <div>loading...</div>;
    }
  },

  logout: function(e) {
    UserClientActions.logout();
  },

  render: function() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461962894/logo4_hmykzh.jpg" />
          <SearchBar/>
        </div>
        <div className="nav-right">
          <NavIconBar/>
          {this.userProfile()}
        </div>
      </div>
    );
  }

});

module.exports = NavBar;

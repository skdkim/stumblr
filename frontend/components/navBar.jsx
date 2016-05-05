var React = require('react');
var SearchBar = require('./search/searchBar');
var UserClientActions = require('../actions/user/userClientActions');
var CurrentUserStateMixin = require('../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;

var NavBar = React.createClass({
  mixins: [CurrentUserStateMixin],

  pushToProfile: function() {
    HashHistory.push('/users/' + this.state.currentUser.id);
  },

  pushToDash: function() {
    HashHistory.push('/dashboard');
  },

  pushToExplore: function() {
    HashHistory.push('/explore/');
  },

  navRight: function() {
    if (this.state.currentUser) {
      return (
        <div className="nav-right">
          <img className="nav-icon" onClick={this.pushToDash} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225052/home_n9c9qv.png"></img>
          <img className="nav-icon" onClick={this.pushToExplore} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225052/compass_wwlply.png"></img>
          <img className="nav-icon" onClick={this.pushToProfile} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462225784/user_tqcx1r.png"></img>
          <img className="nav-icon" onClick={this.logout} src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462224009/poweroff_wmvl7k.png"></img>
        </div>
      );
    } else {
      return <div></div>;
    }
  },

  logout: function(e) {
    UserClientActions.logout();
  },

  render: function() {
    return (
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461962894/logo4_hmykzh.jpg" onClick={this.pushToDash}/>
          <SearchBar/>
        </div>
        {this.navRight()}
      </div>
    );
  }

});

module.exports = NavBar;

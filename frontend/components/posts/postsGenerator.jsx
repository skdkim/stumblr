var React = require('react');
var HashHistory = require('react-router').hashHistory;
var CurrentUserStateMixin = require('../../mixins/currentUserState');


var PostsGenerator = React.createClass({
  mixins: [CurrentUserStateMixin],

  newTextPost: function() {
    HashHistory.push('/dashboard/newtext');
  },

  newPhotoPost: function() {
    HashHistory.push('/dashboard/newphoto');
  },

  newQuotePost: function() {
    HashHistory.push('/dashboard/newquote');
  },

  newLinkPost: function() {
    HashHistory.push('/dashboard/newlink');
  },

  newAudioPost: function() {
    HashHistory.push('/dashboard/newaudio');
  },

  newVideoPost: function() {
    HashHistory.push('/dashboard/newvideo');
  },

  render: function() {
    return (
      <div className="generator-container">
        <div className="user-photo-container">
          <img className="user-photo" src={this.state.currentUser.profile_image_url}></img>
        </div>
        <div className="generator">
          <button className="generator-button" onClick={this.newTextPost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/text_zlchdd.jpg"/>
            Text
          </button>
          <button className="generator-button" onClick={this.newPhotoPost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461965952/photocolor_c6t6gr.jpg"/>
            Photo
          </button>
          <button className="generator-button" onClick={this.newQuotePost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461965952/quotecolor_wulzcp.jpg"/>
            Quote
          </button>
          <button className="generator-button" onClick={this.newLinkPost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461965952/linkcolor_kfolzd.jpg"/>
            Link
          </button>
          <button className="generator-button" onClick={this.newAudioPost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461965952/audiocolor_k6fom5.jpg"/>
            Audio
          </button>
          <button className="generator-button" onClick={this.newVideoPost}>
            <img className="generator-icon"
              src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461965951/videocolor_ldbmts.jpg"/>
            Video
          </button>
        </div>
      </div>
    );
  }
});


module.exports = PostsGenerator;

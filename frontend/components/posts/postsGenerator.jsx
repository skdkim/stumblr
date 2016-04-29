var React = require('react');
var HashHistory = require('react-router').hashHistory;

var PostsGenerator = React.createClass({
  newTextPost: function() {
    HashHistory.push('/newtext');
  },

  newPhotoPost: function() {
    HashHistory.push('/newphoto');
  },

  newQuotePost: function() {
    HashHistory.push('/newquote');
  },

  newLinkPost: function() {
    HashHistory.push('/newlink');
  },

  newAudioPost: function() {
    HashHistory.push('/newaudio');
  },

  newVideoPost: function() {
    HashHistory.push('/newvideo');
  },

  render: function() {
    return (
      <div className="generator-container">
        <button className="generator-button" onClick={this.newTextPost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/text_zlchdd.jpg"/>
          Text
        </button>
        <button className="generator-button" onClick={this.newPhotoPost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/photo_gtfggq.jpg"/>
          Photo
        </button>
        <button className="generator-button" onClick={this.newQuotePost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/quote_pq80kq.jpg"/>
          Quote
        </button>
        <button className="generator-button" onClick={this.newLinkPost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/link_yg6qna.jpg"/>
          Link
        </button>
        <button className="generator-button" onClick={this.newAudioPost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/audio_lslyr2.jpg"/>
          Audio
        </button>
        <button className="generator-button" onClick={this.newVideoPost}>
          <img className="generator-icon"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1461949989/video_s4ylbx.jpg"/>
          Video
        </button>
      </div>
    );
  }
});


module.exports = PostsGenerator;

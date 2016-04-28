var React = require('react');

var PostFeedItem = React.createClass({
  postNav: function() {
    return (
      <div className="post-bar post-nav">
        <p>notes here</p>
        <p>icons here</p>
      </div>
    );
  },

 	render: function () {
 		return(
 			<div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div className="title">{this.props.post.title}</div>
   				<div className="body">{this.props.post.body}</div>
        </div>
        {this.postNav()}
 			</div>
 		);
 	}
 });
 // TODO: add content (e.g. photo, mp3, video, etc.) between title and body

// TODO: add PostNotes to postNav

 module.exports = PostFeedItem;

var React = require('react');

var PostFeedItem = React.createClass({
  postNav: function() {
    return (
      <div className="post-bar">

      </div>
    );
  },

 	render: function () {
 		return(
 			<div className="post">
 				<div className="post-bar">{this.props.post.author.username}</div>
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

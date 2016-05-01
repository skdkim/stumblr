var React = require('react');

var PostFeedItem = React.createClass({
  textPost: function() {
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <div className="title">{this.props.post.title}</div>
            <div className="body">{this.props.post.body}</div>
          </div>


          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  photoPost: function() {
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <img className="photo" src={this.props.post.content_url}></img>
            <div className="body">{this.props.post.body}</div>
          </div>

          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  quotePost: function() {
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <div className="title">{this.props.post.title}</div>
            <div className="body">{this.props.post.body}</div>
          </div>

          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  linkPost: function() {
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <a className="url" href={this.props.post.content_url}>{this.props.post.title}</a>
            <div className="body">{this.props.post.body}</div>
          </div>

          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  audioPost: function() {

    // TODO: render audio player
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <div className="title">{this.props.post.title}</div>
            <div className="body">{this.props.post.body}</div>
          </div>

          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  videoPost: function() {
    return (
      <div className="post">
 				<div className="post-bar">
          <p className="author">{this.props.post.author.username}</p>
 				</div>
        <div className="post-content">
          <div>
            <div className="video">
              <iframe
                width="470"
                height="300"
                src={this.props.post.content_url}
                frameborder="0"
                allowFullScreen>
              </iframe>
            </div>
            <div className="title">{this.props.post.title}</div>
            <div className="body">{this.props.post.body}</div>
          </div>

          <div className="tags">

          </div>
        </div>
        {this.postNav()}
 			</div>
    );
  },

  postNav: function() {
    return (
      <div className="post-bar post-nav">
        <p>notes here</p>
        <p>icons here</p>
      </div>
    );
  },

 	render: function () {


    // TODO: render all of the post's tags


    switch (this.props.post.post_type) {
      case "text":
        return this.textPost();
      case "photo":
        return this.photoPost();
      case "quote":
        return this.quotePost();
      case "link":
        return this.linkPost();
      case "audio":
        return this.audioPost();
      case "video":
        return this.videoPost();
    }
 	}
 });

// TODO: add PostNotes to postNav
// TODO: add like or not functionality

 module.exports = PostFeedItem;

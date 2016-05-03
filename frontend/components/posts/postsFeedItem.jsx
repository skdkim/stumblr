var React = require('react');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var PostAPIUtil = require('../../util/postsApiUtil');
var HashHistory = require('react-router').hashHistory;

var PostFeedItem = React.createClass({
  mixins: [CurrentUserStateMixin],

  textPost: function() {
    return (
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">
                {this.props.post.body.indexOf('\n') > -1
                  ?
                    <pre>{this.props.post.body}</pre>
                  :
                    this.props.post.body}
              </div>
            </div>
    );
  },

  photoPost: function() {
    return (
            <div>
              <img className="photo" src={this.props.post.content_url}></img>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  quotePost: function() {
    return (
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="quote-source">-&nbsp;{this.props.post.body}</div>
            </div>
    );
  },

  linkPost: function() {
    return (
            <div>
              <a className="url" href={this.props.post.content_url}>{this.props.post.title}</a>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  audioPost: function() {
    return (

            <div>

              <audio controls>
                <source src={this.props.post.content_url} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
                </audio>
              <div className="audio-display">
                {this.props.post.body} &nbsp;-&nbsp; {this.props.post.title}
              </div>

            </div>


    );
  },

  videoPost: function() {
    return (
            <div>
              <div className="video">
                <iframe
                  width="540"
                  height="300"
                  src={this.props.post.content_url}
                  frameborder="0"
                  allowFullScreen>
                </iframe>
              </div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">{this.props.post.body}</div>
            </div>
    );
  },

  postNav: function() {
    var noteCount = this.props.post.notes.length;
    return (
      <div className="post-bar post-nav">
        <p>{noteCount} notes</p>
        <p>
          <img
            className="post-nav-icon-large"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/rebloggray_rj5x5k.jpg"
            onClick={this.reblog}>
          </img>

          {this.props.post.author.username === this.state.currentUser.username
            ?
                <img
                  className="post-nav-icon-medium"
                  src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208187/delete_dtfzyr.jpg"
                  onClick={this.delete}>
                </img>
            :
              <img
                className="post-nav-icon-small"
                src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/heartgray_selz14.jpg"
                onClick={this.like}>
              </img>
          }
        </p>
      </div>
    );
  },
//  colored heart for later
// <img className="post-nav-icon" src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/heartcolor_skwnkr.jpg"></img>


  pushToBlog: function() {
    HashHistory.push('/users/' + this.props.post.author.id);
  },


  reblog: function() {
    var rebloggedPost = Object.assign({}, this.props.post);
    rebloggedPost.original_author = rebloggedPost.author;
    rebloggedPost.author = this.state.currentUser;
    PostAPIUtil.createPost(rebloggedPost);
  },

  like: function() {

  },

  delete: function() {
    PostAPIUtil.deletePost(this.props.post.id);
  },

 	render: function () {
    switch (this.props.post.post_type) {
      case "text":
        var content = this.textPost();
        break;
      case "photo":
        var content = this.photoPost();
        break;
      case "quote":
        var content = this.quotePost();
        break;
      case "link":
        var content = this.linkPost();
        break;
      case "audio":
        var content = this.audioPost();
        break;
      case "video":
        var content = this.videoPost();
        break;
    }


    return (
      <div className="post-container">
        <div className="user-photo-container">
          <img className="user-photo" src={this.props.post.author.profile_image_url}></img>
        </div>
        <div className="post">
   				<div className="post-bar">
            <p className="author" onClick={this.pushToBlog}>
              {this.props.post.author.username}
            </p>
   				</div>
          <div className="post-content">

            {content}

            <ul className="tags">
              {this.props.post.tags.map(function(tag){
                return <li className="tag" id={tag.id}>#{tag.tag}</li>;
              })}
            </ul>

          </div>
          {this.postNav()}
   			</div>
      </div>
    );
 	}
 });

// TODO: add PostNotes to postNav
// TODO: add like or not functionality

 module.exports = PostFeedItem;

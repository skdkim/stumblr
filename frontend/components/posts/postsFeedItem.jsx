var React = require('react');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var PostAPIUtil = require('../../util/postsApiUtil');
var HashHistory = require('react-router').hashHistory;

var PostFeedItem = React.createClass({
  mixins: [CurrentUserStateMixin],

  textPost: function() {
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
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">{this.props.post.body}</div>
            </div>


            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  photoPost: function() {
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
            <div>
              <img className="photo" src={this.props.post.content_url}></img>
              <div className="body">{this.props.post.body}</div>
            </div>

            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  quotePost: function() {
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
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="quote-source">-&nbsp;{this.props.post.body}</div>
            </div>

            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  linkPost: function() {
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
            <div>
              <a className="url" href={this.props.post.content_url}>{this.props.post.title}</a>
              <div className="body">{this.props.post.body}</div>
            </div>

            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  audioPost: function() {
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
            <div>

              <audio controls>
                <source src={this.props.post.content_url} type="audio/mpeg"/>
                  Your browser does not support the audio tag.
                </audio>
              <div className="audio-display">
                {this.props.post.body} &nbsp;-&nbsp; {this.props.post.title}
              </div>

            </div>

            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  videoPost: function() {
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

            <div className="tags">

            </div>
          </div>
          {this.postNav()}
   			</div>
      </div>
    );
  },

  postNav: function() {
    return (
      <div className="post-bar post-nav">
        <p>notes here</p>
        <p>
          <img
            className="post-nav-icon-large"
            src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/rebloggray_rj5x5k.jpg"
            onClick={this.reblog}>
          </img>

          {this.props.post.author === this.props.currentUser
            ?
              <div>
                <img
                  className="post-nav-icon"
                  src="http://res.cloudinary.com/dn07p1frq/image/upload/v1462208187/delete_dtfzyr.jpg"
                  onClick={this.delete}>
                </img>
              </div>
            :
              <img
                className="post-nav-icon"
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
    var rebloggedPost = this.props.post;
    rebloggedPost.original_author = rebloggedPost.author;
    rebloggedPost.author = this.state.currentUser;
    PostAPIUtil.createPost(rebloggedPost);
  },

  like: function() {

  },

  delete: function() {

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

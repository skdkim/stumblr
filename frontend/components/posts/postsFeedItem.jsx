var React = require('react');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var PostAPIUtil = require('../../util/postsApiUtil');
var PostClientActions = require('../../actions/posts/postClientActions');
var LikeActions = require('../../actions/likeActions');
var FollowActions = require('../../actions/followActions');
var HashHistory = require('react-router').hashHistory;

var PostFeedItem = React.createClass({
  mixins: [CurrentUserStateMixin],

  textPost: function() {
    return (
            <div>
              <div className="title">{this.props.post.title}</div>
              <div className="body">
                {this.props.post.body}
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
    var noteCount = this.props.post.liking_users.length;
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
                src={this.likeIcon()}
                onClick={this.toggleLike}>
              </img>
          }
        </p>
      </div>
    );
  },


  isLiked: function() {
    var currentUser = this.state.currentUser;
    if (currentUser) {
      var likedPosts = currentUser.liked_posts;
      if (likedPosts.indexOf(this.props.post.id) > -1) {
        return true;
      } else {
        return false;
      }
    }
  },

  likeIcon: function() {
    if (this.isLiked()) {
      return "http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/heartcolor_skwnkr.jpg";
    } else {
      return "http://res.cloudinary.com/dn07p1frq/image/upload/v1462208031/heartgray_selz14.jpg";
    }
  },

  toggleLike: function() {
    var likeData = {post_id: this.props.post.id};

    if (this.isLiked()) {
      LikeActions.deleteLike(likeData);
    } else {
      LikeActions.createLike(likeData);
    }
  },

  isFollowing: function() {
    var currentUser = this.state.currentUser;
    if (currentUser) {
      var followeds = currentUser.followeds;
      if (followeds.indexOf(this.props.post.author.id) > -1) {
        return "unfollow";
      } else {
        return "follow";
      }
    }
  },


  toggleFollow: function() {
    var followData = {
      follower_id: this.state.currentUser.id,
      followed_id: this.props.post.author_id
    };

    if (this.isFollowing() === "unfollow") {
      FollowActions.deleteFollow(followData);
    } else {
      FollowActions.createFollow(followData);
    }

    PostClientActions.fetchPosts();
  },


  pushToBlog: function() {
    HashHistory.push('/users/' + this.props.post.author.id);
  },


  reblog: function() {
    var rebloggedPost = Object.assign({}, this.props.post);
    rebloggedPost.original_author = rebloggedPost.author;
    rebloggedPost.author = this.state.currentUser;
    PostAPIUtil.createPost(rebloggedPost);
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

            {this.state.currentUser.username !== this.props.post.author.username
              ?
                <p className="follow-button" onClick={this.toggleFollow}>
                  {this.isFollowing()}
                </p>
              :
                <p></p>
            }

   				</div>
          <div className="post-content">

            {content}

            <ul className="tags">
              {this.props.post.tags.map(function(tag){
                return <li className="tag" key={tag.id}>#{tag.tag}</li>;
              })}
            </ul>

          </div>
          {this.postNav()}
   			</div>
      </div>
    );
 	}
 });


 module.exports = PostFeedItem;

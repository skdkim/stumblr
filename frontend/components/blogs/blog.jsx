var React = require('react');
var BlogItem = require('./blogItem');
var PostStore = require('../../stores/postStore');
var UserStore = require('../../stores/userStore');
var PostClientActions = require('../../actions/posts/postClientActions');
var UserClientActions = require('../../actions/user/userClientActions');
var FollowActions = require('../../actions/followActions');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;
var Masonry = require('react-masonry-component');


var PostsFeed = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentDidMount: function() {
    UserClientActions.fetchAuthor(this.props.params.id);
    this.authorListener = UserStore.addListener(this._updateAuthor);
    this.postListener = PostStore.addListener(this._updatePosts);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
    this.authorListener.remove();
  },

  _updateAuthor: function() {
    var author = UserStore.author();
    this.setState({
      author: author,
    });
    PostClientActions.fetchPosts({authorId: author.id});
  },

  _updatePosts: function() {
    this.setState({
      posts: PostStore.all(),
    });
  },

  isFollowing: function() {
    var currentUser = this.state.currentUser;
    if (currentUser) {
      var followeds = currentUser.followeds;
      if (followeds.indexOf(this.state.author.id) > -1) {
        return "unfollow";
      } else {
        return "follow";
      }
    }
  },

  toggleFollow: function() {
    var followData = {
      follower_id: this.state.currentUser.id,
      followed_id: this.state.author.id
    };

    if (this.isFollowing() === "unfollow") {
      FollowActions.deleteFollow(followData);
    } else {
      FollowActions.createFollow(followData);
    }

    PostClientActions.fetchPosts();
  },

 	render: function () {
    var childElements =
          this.state.posts.map(function(post) {
            return <BlogItem id={post.id} post={post}/>;
          });

    if (!this.state.author || !this.state.posts) {
      return (
        <div>Loading...</div>
      );
    }else {
      return (
          <div className="blog-container">
            <div className="blog-info">
              <div className="author-photo-container">
                <img className="author-photo" src={this.state.author.profile_image_url}></img>
              </div>
              <div className="author-info">{this.state.author.blog_title}</div>
              <div className="author-info blog-description">{this.state.author.blog_description}</div>

              {this.state.currentUser.username !== this.state.author.username
                ?
                  <input type="submit" className="follow-button"
                    value={this.isFollowing()} onClick={this.toggleFollow}>
                  </input>
                :
                  <p></p>
              }


            </div>
            <Masonry
                className={'blog'}
                elementType={'div'}
                disableImagesLoaded={false}>
                {childElements}
            </Masonry>
          </div>
      );
    }
 	}
 });



 module.exports = PostsFeed;

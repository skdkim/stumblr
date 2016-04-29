var React = require('react');
var PostStore = require('../../stores/postStore');
var UserStore = require('../../stores/userStore');
var PostsFeedItem = require('./postsFeedItem');
var PostsGenerator = require('./postsGenerator');
var PostClientActions = require('../../actions/posts/postClientActions');
var UserClientActions = require('../../actions/user/userClientActions');
var CurrentUserStateMixin = require('../../mixins/currentUserState');
var HashHistory = require('react-router').hashHistory;

var PostsFeed = React.createClass({
  mixins: [CurrentUserStateMixin],

  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentDidMount: function() {
    PostClientActions.fetchPosts();
    this.postListener = PostStore.addListener(this._onChange);
    this.errorsListener = UserStore.addListener(this._authErrors);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
    this.errorsListener.remove();
  },

  _authErrors: function() {
    if (!UserStore.currentUser()) {
      HashHistory.push('/');
    }
  },

  _onChange: function() {
    this.setState({
      posts: PostStore.all()
    });
  },

 	render: function () {
    var posts = this.state.posts;
    if (this.state.currentUser){
      return(
        <div>
          <div className="feed">
            {this.props.children}

            {posts.map(function(post){
              return <PostsFeedItem key={post.id} post={post}/>;
            })}
          </div>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
 	}
 });



 module.exports = PostsFeed;

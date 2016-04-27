var React = require('react');
var PostStore = require('../../stores/postStore');
var PostsFeedItem = require('./postsFeedItem');
var PostClientActions = require('../../actions/posts/postClientActions');

var PostsFeed = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentDidMount: function() {
    PostClientActions.fetchPosts();
    this.postListener = PostStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    delete this.postListener;
  },

  _onChange: function() {
    this.setState({
      posts: PostStore.all()
    });
  },

 	render: function () {
    var posts = PostStore.all();
 		return(
 			<div>
 				POSTS FEED:
        {posts.map(function(post){
          return <PostsFeedItem key={post.id} post={post}/>;
        })}
 			</div>
 		);
 	}
 });



 module.exports = PostsFeed;

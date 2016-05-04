var React = require('react');
var PostStore = require('../../stores/postStore');
var PostClientActions = require('../../actions/posts/postClientActions');
var BlogItem = require('../blogs/blogItem');

var SearchFeed = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this._onChange);
    PostClientActions.fetchPosts();
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  _onChange: function() {
    this.setState({
      posts: PostStore.all()
    });
  },

  render: function() {
    return (
      <div>
        {this.state.posts.map(function(post) {
          return <BlogItem id={post.id} post={post}/>;
        })}
      </div>
    );
  }
});


module.exports = SearchFeed;

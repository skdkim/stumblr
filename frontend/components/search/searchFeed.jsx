var React = require('react');
var PostStore = require('../../stores/postStore');
var PostClientActions = require('../../actions/posts/postClientActions');
var BlogItem = require('../blogs/blogItem');
var Masonry = require('react-masonry-component');

var SearchFeed = React.createClass({
  getInitialState: function() {
    return {
      posts: []
    };
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this._onChange);
    PostClientActions.fetchPosts({explore: true});
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
    var childElements =
          this.state.posts.map(function(post) {
            return <BlogItem id={post.id} post={post}/>;
          });

    return (
        <Masonry
            className={'search-feed'}
            elementType={'div'}
            disableImagesLoaded={false}>
            {childElements}
        </Masonry>
    );
  }
});


module.exports = SearchFeed;

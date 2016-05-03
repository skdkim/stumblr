var React = require('react');
var BlogItem = require('./blogItem');
var PostStore = require('../../stores/postStore');
var UserStore = require('../../stores/userStore');
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
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  _onChange: function() {
    this.setState({
      posts: PostStore.all()
    });
  },

 	render: function () {
    return (
      <div className="blog">
        <div className="blog-info">
          Blog Info
        </div>

        <div className="blog-feed">
          {this.props.posts.map(function(post){
            return <BlogItem post={post}/>;
          })}
        </div>
      </div>
    );
 	}
 });



 module.exports = PostsFeed;

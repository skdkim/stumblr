var React = require('react');
var PostClientActions = require('../../../actions/posts/postClientActions');
var PostStore = require('../../../stores/postStore');
var HashHistory = require('react-router').hashHistory;

var PhotoForm = React.createClass({
  getInitialState: function() {
    return {
      tags: []
    };
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.pushToDash);
  },

  componentWillUnmount: function() {
    this.postListener.remove();
  },

  pushToDash: function() {
    HashHistory.push('/dashboard');
  },

  updateBody: function(e) {
    this.setState({
      body: e.target.value
    });
  },

  updateTags: function(e) {
    this.setState({
      tags: e.target.value
    });
  },

  handleSubmit: function(e) {
    e.preventDefault();

    PostClientActions.createPost(
      {
        post_type: "photo",
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags
      }
    );

    this.setState({
      title: "",
      body: "",
      tags: ""
    });
  },

  render: function () {
    return(
      <div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>




          <input className="caption-input" type="textarea" value={this.state.body}
            placeholder="Caption" onChange={this.updateBody}></input>
          <input className="tags-input" type="text" value={this.state.tags}
            placeholder="#tags" onChange={this.updateTags}></input>

          <div className="post-submit-bar">
            <input className="post-form-button" type="submit"
              value="Close" onClick={this.pushToDash}></input>
            <input className="post-form-button"type="submit"
              value="Post"></input>
          </div>
        </form>
      </div>
    );
  }
 });

// TODO: add photo upload link to cloudinary


 module.exports = PhotoForm;

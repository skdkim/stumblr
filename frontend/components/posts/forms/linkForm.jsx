var React = require('react');
var PostClientActions = require('../../../actions/posts/postClientActions');
var PostStore = require('../../../stores/postStore');
var HashHistory = require('react-router').hashHistory;

var LinkForm = React.createClass({
  getInitialState: function() {
    return {
      content_url: "",
      title: "",
      body: "",
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

  updateUrl: function(e) {
    this.setState({
      content_url: e.target.value
    });
  },

  updateTitle: function(e) {
    this.setState({
      title: e.target.value
    });
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
        post_type: "link",
        content_url: this.state.content_url,
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags
      }
    );

    this.setState({
      content_url: "",
      title: "",
      body: "",
      tags: []
    });
  },

 	render: function () {
 		return(
 			<div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input className="link-input" type="textarea" value={this.state.content_url}
            placeholder="URL" onChange={this.updateUrl}></input>
          <input className="link-input" type="textarea" value={this.state.title}
            placeholder="Display Text" onChange={this.updateTitle}></input>
          <input className="caption-input" type="text" value={this.state.body}
            placeholder="Caption" onChange={this.updateBody}></input>
          <input className="tags-input" type="text" value={this.state.tags}
            placeholder="#tags" onChange={this.updateTags}></input>

          <div className="post-submit-bar">
            <input className="post-form-button" type="submit"
              value="Close" onClick={this.pushToDash}></input>
            <input className="post-form-button"type="submit"
              value="Post" onClick={this.handleSubmit}></input>
          </div>
        </form>
 			</div>
 		);
 	}
 });



 module.exports = LinkForm;

var React = require('react');
var PostClientActions = require('../../../actions/posts/postClientActions');
var PostStore = require('../../../stores/postStore');
var HashHistory = require('react-router').hashHistory;

var PhotoForm = React.createClass({
  getInitialState: function() {
    return {
      content_url: "",
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
        content_url: this.state.content_url,
        body: this.state.body,
        tags: this.state.tags
      }
    );

    this.setState({
      content_url: "",
      body: "",
      tags: []
    });
  },

  upload: function(e) {
    var self = this;
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
      function(error, images) {
        if (error === null) {
          self.setState({
            content_url: images[0].url
          });
        }
    });
  },

  render: function () {
    return(
      <div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>

          {this.state.content_url === ""
            ?
              <input className="upload-button" type="submit"
                value="Upload Image" onClick={this.upload}></input>
            :
              <input className="upload-button uploaded" type="submit"
                value="Change Uploaded Image" onClick={this.upload}></input>
          }

          <input className="caption-input" type="textarea" value={this.state.body}
            placeholder="Caption" onChange={this.updateBody}></input>
          <input className="tags-input" type="text" value={this.state.tags}
            placeholder="#tags" onChange={this.updateTags}></input>

          <div className="post-submit-bar">
            <input className="post-form-button" type="submit"
              value="Close" onClick={this.pushToDash}></input>
            <input className="post-form-button" type="submit"
              value="Post" onClick={this.handleSubmit}></input>
          </div>
        </form>
      </div>
    );
  }
 });



 module.exports = PhotoForm;

var React = require('react');
var PostClientActions = require('../../../actions/posts/postClientActions');
var PostStore = require('../../../stores/postStore');
var HashHistory = require('react-router').hashHistory;

var AudioForm = React.createClass({
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
        post_type: "audio",
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
                value="Upload Audio" onClick={this.upload}></input>
            :
              <input className="upload-button uploaded" type="submit"
                value="Change Uploaded Audio" onClick={this.upload}></input>
          }

          <input className="audio-text-input" type="textarea" value={this.state.title}
            placeholder="Artist" onChange={this.updateTitle}></input>
          <input className="audio-text-input" type="text" value={this.state.body}
            placeholder="Track Name" onChange={this.updateBody}></input>
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



 module.exports = AudioForm;

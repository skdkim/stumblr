var React = require('react');
var PostClientActions = require('../../../actions/posts/postClientActions');
var PostStore = require('../../../stores/postStore');
var HashHistory = require('react-router').hashHistory;

var QuoteForm = React.createClass({
  getInitialState: function() {
    return {
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
        post_type: "quote",
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags
      }
    );

    this.setState({
      title: "",
      body: "",
      tags: []
    });
  },

 	render: function () {
 		return(
 			<div className="post-form-container">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <input className="quote-input" type="textarea" value={this.state.title}
            placeholder="&quot;Quote&quot;" onChange={this.updateTitle}></input>
          <input className="quote-source-input" type="text" value={this.state.body}
            placeholder="Source" onChange={this.updateBody}></input>
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



 module.exports = QuoteForm;

var React = require('react');

var TagForm = require('./tagForm');

var TextForm = React.createClass({
  getInitialState: function() {
    return {
      tags: []
    };
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
    if(e.target.value[-1] === "\n" || e.target.value[-1] === ", ") {
      this.setState({
        tags: this.state.tags.push(e.target.value)
      });
    }
  },

 	render: function () {
 		return(
 			<div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title}
            placeholder="Title" onChange={this.updateTitle}></input>
          <input type="text" value={this.state.body}
            placeholder="Your text here" onChange={this.updateBody}></input>
          <TagForm onChange={this.updateTags}/>
        </form>
 			</div>
 		);
 	}
 });



 module.exports = TextForm;

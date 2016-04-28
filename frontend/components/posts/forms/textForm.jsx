var React = require('react');

var TextForm = React.createClass({
 	render: function () {
 		return(
 			<div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.title}
            placeholder="Title"></input>
          <input type="text" value={this.state.body}
            placeholder="Your text here"></input>
          <TagForm></TagForm>
        </form>
 			</div>
 		);
 	}
 });



 module.exports = TextForm;

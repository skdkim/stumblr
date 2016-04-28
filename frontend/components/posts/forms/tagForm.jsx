var React = require('react');

var TagForm = React.createClass({
 	render: function () {
 		return(
 			<div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="#tags"></input>
        </form>
 			</div>
 		);
 	}
 });



 module.exports = TagForm;

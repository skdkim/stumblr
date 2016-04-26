var React = require('react');

var Post = React.createClass({
 	render: function () {
 		return(
 			<div>
 				This is a POST!
 				{this.props.children}
 			</div>
 		);
 	}
 });



 module.exports = Post;

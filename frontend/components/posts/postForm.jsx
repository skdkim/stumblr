var React = require('react');

var PostForm = React.createClass({
 	render: function () {
 		return(
 			<div>
 				POST FORM WILL GO HERE
 				{this.props.children}
 			</div>
 		);
 	}
 });



 module.exports = PostForm;

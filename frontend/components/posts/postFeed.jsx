var React = require('react');

var PostFeed = React.createClass({
 	render: function () {
 		return(
 			<div>
 				POST FEED WHAT'S UP
 				{this.props.children}
 			</div>
 		);
 	}
 });



 module.exports = PostFeed;

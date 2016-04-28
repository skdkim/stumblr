var React = require('react');

 module.exports = React.createClass({
 	render: function () {
 		return(
 			<div className="app">
 				STUMBLR!
 				{this.props.children}
 			</div>
 		);
 	}
 });

var React = require('react');
var NavBar = require('./navBar');


 module.exports = React.createClass({
 	render: function () {
 		return(
 			<div className="app">
 				<NavBar/>
 				{this.props.children}
 			</div>
 		);
 	}
 });

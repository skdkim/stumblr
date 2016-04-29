var React = require('react');
// var BackgroundImageSource = require('../util/backgroundImageSource');
//
// var imgUrl = BackgroundImageSource.returnImgSource();
//
// var divStyle = {
//   color: 'white',
//   backgroundImage: 'url(' + imgUrl + ')',
//   WebkitTransition: 'all', // note the capital 'W' here
//   msTransition: 'all' // 'ms' is the only lowercase vendor prefix
// };

 // style={divStyle}

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

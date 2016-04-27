var React = require('react');
 var ReactDOM = require('react-dom');
 var Router = require('react-router').Router;
 var Route = require('react-router').Route;
 var IndexRoute = require('react-router').IndexRoute;
 var HashHistory = require('react-router').hashHistory;

 var App = require('./components/app.jsx');
 var Landing = require('./components/user/landing.jsx');
 var LoginForm = require('./components/user/loginForm');
 var SignUpForm = require('./components/user/signUpForm');
 var PostForm = require('./components/posts/postForm');
 var PostsFeed = require('./components/posts/postsFeed');
 var PostsFeedItem = require('./components/posts/PostsFeedItem');

 var routes = (
 	<Route path='/' component={App}>
    // <IndexRoute component={Landing}>
    // </IndexRoute>
    <Route path='signup' component={SignUpForm}></Route>
    <Route path='login' component={LoginForm}></Route>

    <Route path='posts' component={PostsFeed}>
      // TODO: post form as always-child of postsfeed
      // TODO: postfeeditem as always-child of postsfeed
   	</Route>
  </Route>
  // TODO: all of these(!) push to landing if not logged in; on enter hook
 );

 document.addEventListener('DOMContentLoaded', function () {
 	ReactDOM.render(
 		<Router history={HashHistory}>{routes}</Router>,
 		document.getElementById('root')
 	);
 });

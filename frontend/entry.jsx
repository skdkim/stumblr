var React = require('react');
 var ReactDOM = require('react-dom');
 var Router = require('react-router').Router;
 var Route = require('react-router').Route;
 var IndexRoute = require('react-router').IndexRoute;
 var HashHistory = require('react-router').hashHistory;
 var UserStore = require('./stores/userStore');

 var App = require('./components/app.jsx');
 var Landing = require('./components/user/landing.jsx');
 var LoginForm = require('./components/user/loginForm');
 var SignUpForm = require('./components/user/signUpForm');
 // var PostForm = require('./components/posts/postForm');
 var PostsFeed = require('./components/posts/postsFeed');
 var PostsFeedItem = require('./components/posts/postsFeedItem');
 var PostsGenerator = require('./components/posts/postsGenerator');
 var SearchFeed = require('./components/search/searchFeed');

 var TextForm = require('./components/posts/forms/textForm');
 var PhotoForm = require('./components/posts/forms/photoForm');
 var QuoteForm = require('./components/posts/forms/quoteForm');
 var LinkForm = require('./components/posts/forms/linkForm');
 var AudioForm = require('./components/posts/forms/audioForm');
 var VideoForm = require('./components/posts/forms/videoForm');


 var requireAnonymous = function() {
   if (UserStore.currentUser()) {
     HashHistory.push('/dashboard');
   }
 };

 var routes = (
 	<Route path='/' component={App}>
    <IndexRoute component={Landing}></IndexRoute>
    <Route path='signup' component={SignUpForm}></Route>
    <Route path='login' component={LoginForm}></Route>
    <Route path='explore' component={SearchFeed}></Route>

    <Route path='dashboard' component={PostsFeed}>
      <IndexRoute component={PostsGenerator}></IndexRoute>
      <Route path='newtext' component={TextForm}></Route>
      <Route path='newphoto' component={PhotoForm}></Route>
      <Route path='newquote' component={QuoteForm}></Route>
      <Route path='newlink' component={LinkForm}></Route>
      <Route path='newaudio' component={AudioForm}></Route>
      <Route path='newvideo' component={VideoForm}></Route>
   	</Route>
  </Route>
 );
 // TODO: post form as always-child of postsfeed
 // TODO: postfeeditem as always-child of postsfeed

 // TODO: all of these(!) push to landing if not logged in; on enter hook

 document.addEventListener('DOMContentLoaded', function () {
 	ReactDOM.render(
 		<Router history={HashHistory}>{routes}</Router>,
 		document.getElementById('root')
 	);
 });

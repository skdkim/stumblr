# Stumblr

[Stumblr live](http://stumblr-.herokuapp.com/)

Stumblr is a full-stack web application modeled after Tumblr.  It is built on a Ruby on Rails backend, PostgreSQL database, and React.js/Flux architecture frontend.


## Features & Implementation

### Post Creation and Display

Users can create six different types of posts via media-specific forms. The various types of posts render differently based on post type, with all overlapping logic shared within the `render` method of their component.

Posts are retrieved within the Rails `PostController` using database queries based on the component that is rendering:
  - `SearchFeed`: posts that match a given tag entered in the search input
  - `Blog`: posts whose author matches the blog's author
  - `Explore`: all posts
  - `PostsFeed`: posts authored by user the current user follows and the current user's own posts
Upon each component's mount, the `PostStore` is called to fetch posts and stores the query-returned posts until a new fetch is called.

Posts can be displayed in two different formats. Within the dashboard (`PostsFeed`), posts are arranged in a single column that takes up much of the page's width for detailed display. Within the `SearchFeed` and a user's individual `Blog`, posts are displayed in a grid, implemented with the Masonry.js library for clean display, optimization of space, and transitions.

![image of search feed](https://github.com/quinnleong/stumblr/blob/master/design_docs/explore.png)


### Post Interactions

Users can interact with posts in two ways.

On the dashboard, all posts by other users are likeable. Clicking the heart included with a post turns it red, providing instant visual feedback. Additionally, this adds a note to the post, incrementing the note count, displayed at the bottom of each post.

All posts are rebloggable, including a user's own posts. Clicking the reblog button posts a duplicate of that post under the current user's authorship at the current time, however long ago the original was posted.


### User Interaction

Users can follow each other. This allows for customization of a user's dashboard; on that page, they will only see posts from the users they follow. To find new users to follow, they can visit the explore page to see all posts on Stumblr and to search them by tag.


### Tags

Users can give posts any number of tags. If a tag is given that does not yet exist in the database, it is created. The associated tags are then displayed under each post wherever they appear on the site.


## Ideas for Future Work

### Infinite Scroll

One great feature Tumblr uses is infinite scroll. Stumblr is not to the size where this feature is necessary, but it is one I would like to implement nonetheless, as it would allow the app to scale well and still load very efficiently.


### Push notifications

In real time, users would see a counter of new posts that have been created since they loaded the page. In keeping with Tumblr's style, this number would appear on the home button within the `navbar` so that it is visible even if the user is scrolled far down the dashboard.


### Multiple Photos per Post

This feature is not necessary for functionality, but it would add a nice level of visual complexity and interest. I envision implementing this using the Packery.js library to allow for drag-and-drop interaction when organizing photo grids.


### User-to-User and Anonymous messaging

Adding messaging would allow users to message each other privately, and for anyone, including visitors who are not registered or logged in, to send anonymous messages to any user who enables the feature. These messages would optionally integrate with posts; users would be able to respond to messages from fellow users privately or to post their responses publicly, and all responses to anonymous messages would become posts on that user's blog.

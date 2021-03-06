### Heroku Link

[Stumblr](http://stumblr-.herokuapp.com/)
(Don't worry I'm going to change this weird dash url to an actual domain name)

### Minimum Viable Product

Stumblr is a web application influenced by Tumblr, allowing users to share and interact with blog posts of various media types. Built using Ruby on Rails and React.js, it will include these minimum features:
- [X] Account creation, user login, and demo login
- [X] Seed data to illustrate the app's features
- [X] Posting of text, photos, links, audio, and video
- [X] Interaction with other users' posts (liking and reblogging)
- [X] Post tagging and search by tags
- [X] Bug-free
- [X] Hosted on Heroku
- [X] Styled and interactive (user action feedback)
- [X] Production readme (to replace this readme)

### Design Docs

- [Wireframes folder](https://github.com/quinnleong/stumblr/tree/master/design_docs/wireframes)
- [Components](https://github.com/quinnleong/stumblr/blob/master/design_docs/Components.md)
- [Flux Cycles](https://github.com/quinnleong/stumblr/blob/master/design_docs/flux_cycles.md)
- [API Endpoints](https://github.com/quinnleong/stumblr/blob/master/design_docs/api_endpoints.md)
- [DB Schema](https://github.com/quinnleong/stumblr/blob/master/design_docs/db_schema.md)

### Implementation Timeline

### Phase 1: Backend Setup and User Authentication (0.5 days)

**Objective:** Setup functioning rails project with authentication.

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: Posts Model, API, and APIUtil (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed through
the API.

- [X] create `Post` model
- [X] seed the database
- [X] CRUD API for posts (`PostsController`)
- [X] jBuilder views for posts
- [X] setup `APIUtil` to interact with the API
- [X] file hosting of some kind (lightning talk on this to come?)

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed with the
user interface.

- [X] setup the flux loop with skeleton files
- [X] setup React Router
- implement each post component, building out the flux loop as needed.
  - [X] `PostsGenerator`
  - [X] `PostsFeed`
  - [X] `PostsFeedItem`
  - [X] `PostForm`
  - [ ] `PostsNote`
- [X] work out differentiation between content types in forms, creation, and display
- [X] infinite scroll

### Phase 4: Taggings and Search (1.5 days)

**Objective:** Posts can be given multiple tags, which can be used to search posts.

- [X] create `Tagging` model
- [X] seed database with tag data
- build out API, Flux loop, and components for:
  - [X] adding tags to post
  - [X] updating tags on post (additional tags or deleting tags)
- [X] create `SearchInput` and `SearchFeed` components

### Phase 7: Likes, Reblogs, and Notes (2 days)

**objective:** Users can like and repost other users' posts, and this adds notes to those posts.

- [X] build out `notes` model
- [X] seed database with notes data
- [X] CRUD API for notes
- [X] user interface for CRUD

### Phase 8: Blog Feed (1 day)

**objective:** Users each have their own templated feed of posts.

- [X] build out `BlogFeed` and `BlogFeedItem` components
- [X] style as grid and with different theme than homepage/main app

### Phase 9: Clean-up (2 days)

**objective** Finish up any remaining unfinished pieces and make improvements as time allows.

- [X] Walk through check-lists for every feature and finish/fix any remaining issues
- [X] Clean up and/or improve styling
- [X] Move on to bonus features if time allows

## Bonus Features

- Push notifications
- Multiple photos per photo post
- User-to-user and anonymous messaging
- Infinite scroll

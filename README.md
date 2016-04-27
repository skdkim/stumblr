### Heroku Link

TODO: add Heroku link

### Minimum Viable Product

Stumblr is a web application influenced by Tumblr, allowing users to share and interact with blog posts of various media types. Built using Ruby on Rails and React.js, it will include these minimum features:
- [ ] Account creation, user login, and demo login
- [ ] Seed data to illustrate the app's features
- [ ] Posting of text, photos, links, audio, and video
- [ ] Interaction with other users' posts (liking and reblogging)
- [ ] Post tagging and search by tags
- [ ] Bug-free
- [ ] Hosted on Heroku
- [ ] Styled and interactive (user action feedback)
- [ ] Production readme (to replace this readme)

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
- [ ] seed the database
- [ ] CRUD API for posts (`PostsController`)
- [ ] jBuilder views for posts
- [ ] setup `APIUtil` to interact with the API
- [ ] file hosting of some kind (lightning talk on this to come?)

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Posts can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each post component, building out the flux loop as needed.
  - [ ] `PostsGenerator`
  - [ ] `PostsFeed`
  - [ ] `PostsFeedItem`
  - [ ] `PostForm`
  - [ ] `PostsNote`
- [ ] work out differentiation between content types in forms, creation, and display
- [ ] infinite scroll

### Phase 4: Taggings and Search (1.5 days)

**Objective:** Posts can be given multiple tags, which can be used to search posts.

- [ ] create `Tagging` model
- [ ] seed database with tag data
- [ ] build out API, Flux loop, and components for:
  - [ ] adding tags to post
  - [ ] updating tags on post (additional tags or deleting tags)
- [ ] create `SearchInput` and `SearchFeed` components

### Phase 7: Likes, Reblogs, and Notes (1 day)

**objective:** Users can like and repost other users' posts, and this adds notes to those posts.

- [ ] build out `notes` model
- [ ] seed database with notes data
- [ ] CRUD API for notes
- [ ] user interface for CRUD

### Phase 8: Blog Feed (1 day)

**objective:** Users each have their own templated feed of posts.

- [ ] build out `BlogFeed` and `BlogFeedItem` components
- [ ] style as grid and with different theme than homepage/main app

### Phase 9: Clean-up (2 days)

**objective** Finish up any remaining unfinished pieces and make improvements as time allows.

- [ ] Walk through check-lists for every feature and finish/fix any remaining issues
- [ ] Clean up and/or improve styling
- [ ] Move on to bonus features if time allows

## Bonus Features

- Push notifications
- Multiple photos per photo post

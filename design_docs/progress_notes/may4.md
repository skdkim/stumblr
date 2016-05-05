## Questions

- ~~how to get regular mac finder uploader rather than cloudinary's form~~
  - not worth the time in this project
- ~~how to get user from url params id to display on individual blog pages~~
  - yet another flux cycle
- where to pass param to posts controller so that returns correct post collection
  - i.e. when searching
- ~~FILTERING~~
  - .where(user => user.followers) for IN query (rather than =)
- ~~search feed - `this.props.posts` undefined~~
  - it's `this.state.posts`!
- ~~reblogging breaks like functionality~~
- ~~new posts don't persist after refresh even though server shows them as committed~~
  - LOL the guest account wasn't following itself... fixed to automatically show own posts and no follow button
- ~~upload buttons don't launch cloudinary widget on heroku version even though working fine on local version~~
  - had to push the keys up to heroku



## In Progress

- ~~seed likes~~
- `Posts` components
  - ~~update the photo and audio forms to take an upload~~
  - ~~notes!~~
  - filtering within `PostsController` `index`
- individual blogs
- ~~show own posts! get rid of follow button for self~~
- render content url after upload

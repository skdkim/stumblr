## Questions

- how to get regular mac finder uploader rather than cloudinary's form
- how to get follow id for unfollow
- how to get user from url params id
- where to pass param to posts controller so that returns correct post collection
- FILTERING
- search feed - `this.props.posts` undefined

## In Progress

- ~~change video to take up whole width of post container~~
- seeds! tags, reblogs, likes
- make `Posts` components
  - update the photo and audio forms to take an upload
  - ~~update video form to take a link~~
  - ~~get rid of content_id and content_type -- don't need a separate table for content~~
    - ~~just one field: content_url~~
      - ~~will be either a cloudinary hosted url (photo or audio) or a youtube url (video)~~
        - if time allows, get vimeo working as well and soundcloud/spotify embedding
    - ~~parsing of tags into array (in the controller?)~~
    - likes!
    - reblogs!
    - notes!
  - filtering within `PostsController` `index`
- update `PostsFeedItem` with ternary re: original post or reblog
- ~~if time allows refactor `PostsFeedItem` to DRY up different types of post displays~~

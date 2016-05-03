## Questions

- how to get regular mac finder uploader rather than cloudinary's form
- ~~how to display different kinds of posts?~~
  - ~~is there a better way than including the surrounding code in every post type render function?? wish I could do an if/else if/else if/etc. inside the JSX but not possible...~~
  - can assign switch statement's output to a variable and then interpolate it inside the shared tags within the render method
- ~~how to push to dash after new post has been successfully created~~
  - ~~shouldn't this already be working since the form has a listener on the `PostStore` that pushes to dashboard on change?~~
  - surprise! it is. fixing the push to dash from login/sign up when already logged in fixed this
- how to get the transaction working
- ~~youtube embed is throwing a chrome extension error~~
  - this is based in YouTube's code; nothing to be done
- ~~login and signup pushing to dash only works every other time??~~
  - call `pushToDash()` on component mount since the listener only triggers if the store changes
- get /n to render properly in posts
- why only username for `currentUser` in `NavBar`?
- do I need a whole separate `NoteAPIUtil` and `TaggingsAPIUtil` and `TagAPIUtil`
- add 'feed' as `searchInput` for dashboard feed or better solution?

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
- update `PostsFeedItem` with ternary re: original post or reblog
- if time allows refactor `PostsFeedItem` to DRY up different types of post displays

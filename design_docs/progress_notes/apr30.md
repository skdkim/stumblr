## Questions

- how to get regular mac finder uploader rather than cloudinary's form
- how to display different kinds of posts?
  - is there a better way than including the surrounding code in every post type render function?? wish I could do an if/else if/else if/etc. inside the JSX but not possible...
- how to push to dash after new post has been successfully created
  - shouldn't this already be working since the form has a listener on the `PostStore` that pushes to dashboard on change?
- youtube embed is throwing a chrome extension error


## In Progress

- change video to take up whole width of post container
- seeds! so many to do
- make `Posts` components
  - update the photo and audio forms to take an upload
  - ~~update video form to take a link~~
  - ~~get rid of content_id and content_type -- don't need a separate table for content~~
    - just one field: content_url
      - will be either a cloudinary hosted url (photo or audio) or a youtube url (video)
        - if time allows, get vimeo working as well and soundcloud/spotify embedding
    - parsing of tags into array (in the controller?)
    - likes!
    - reblogs!
    - notes!

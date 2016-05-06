## Questions

- ~~why does pressing enter not submit the search form?~~
  - because it was just an input field, not a form -- had to wrap it in form tags
- ~~is there a way to check the HashHistory contents?~~
  - ~~is this bad practice?~~
  - there isn't since it's an ajax request
  - pass explore param instead
    - within the client actions fetch action
- ~~audio posts don't play until after refresh~~
  - cloudinary just being slow
- ~~more reliable way to choose whether to add `<pre>` tag to text post's body?~~
  - no need for pre-tag; just style `body` with `white-space: pre-wrap`
- ~~link not working because just pushing url into HashHistory~~
  - add to `<a>` tag: `target="_blank"`

## In Progress

- ~~`Posts` components~~
  - ~~filtering within `PostsController` `index`~~
- ~~guest login button!~~
- ~~individual blogs~~
  - ~~need to fetch the blog's user with another flux cycle~~
- ~~render content url after upload~~
- ~~search feed / personal blogs fix~~

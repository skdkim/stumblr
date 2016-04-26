## Questions

- ~~ how to seed including `password_digest` and `session_token` ~~
  - same way as in User model!
- how do sessions work with react - not `redirect_to posts_url` but...
  - do we need react components for session? session info to display in upper right?


## In Progress

- working on `Post` migration -- how to make it so that of three columns at least one must not be null
  - seems like writing a custom validation might be the best solution unless there is already a built-in combinator
    - read through the validations options doc
    - can you `if` and `unless` -- could check other two for each?

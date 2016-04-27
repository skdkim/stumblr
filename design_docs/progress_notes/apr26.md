## Questions

- ~~ how do sessions work with react - not `redirect_to posts_url` but... ~~
  - ~~ do we need react components for session? session info to display in upper right? ~~
  - store, actions, and util for users
- ~~ what does `error.responseJSON.errors` do (in `user_server_actions` - `handleError`) ~~
  - rails packages the errors in this `responseJSON` object, so we have to pull the errors out this way
- if / unless for custom validation not working -- seems like no access to `:content_id`, `:body`, and `:title`


## In Progress

- need to test `Posts`

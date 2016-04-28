## Questions

- why getting `setState` before component mounted error for sign-up but not login?
- ~~why aren't `id`s coming through with `fetchPosts` / `PostStore.all`?~~
  - because I forgot to include it in the JSON/jbuilder view!
- ~~different forms for each type of post OR one form component that changes based on the type of post?~~
  - different ones!
- how to shift down everything else - can I make this happen without much specific effort by rendering or not rendering the `PostForm` right above the `PostsFeed`?
- ~~does it make sense to just have `taggings`, or should I also have `tags`? having `tags` seems excessive but maybe it's bad practice not to use `taggings` as a join table?~~
  - make tags! this is a many-to-many relationship, and it's conventional to have a distinct table for each side.
- ~~how to make `require_signed_in` work with front-end javascript added~~
  - it should render instead of redirecting -- render landing page unless there is a current user

## In Progress

- make `Posts` components
- need to test all `Posts` actions
- figure out log in/sign up/sign out components -- how to render always?

## Questions

- ~~get border-radius to work on post container~~
  - `overflow: hidden` -- the inside elements still had square corners!
- ~~`setState` getting called on unmounted component~~
  - another place I called `delete this.listener` instead of `this.listener.remove()`
- ~~allowing illegal access to dashboard when typing in URL; `onEnter` hooks not working~~
  - changed from `onEnter` hooks to function calls when component mounts; the `onEnter` hooks were immediately pushing away while the asynchronous user fetch was still happening (on refresh)

## In Progress

- make `Posts` components
  - different form for every type of posts
- need to test all `Posts` actions
- ~~update `db_schema` with `tags` table~~
- ~~add functions to require signed in or not signed in for routes~~

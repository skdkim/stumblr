## Questions

- ~~how does `componentWillMount` work differently than `onEnter` hooks? -- why is it not still fetching?~~
  - they do work the same way, but the way we wrote the `componentWillMount` version was so that the component registered a listener with the store and only checked if a user was logged in once the store was done fetching the current user
  - this works because it tries to load current user and gives a 404 not found when the session token doesn't match anyone in the user database, triggering the error action
- how to make/add tags when submitted with posts; where should the new tag be created, if necessary? what about the tagging?
  - accepts nested attributes for
  - do they exist?
    - yes, create tagging
    - no, create tag and tagging
  - via posts controller
    - use a transaction!
- ~~how to make page autofocus on form (html tag doesn't seem to work)~~
  - autoFocus, not autofocus
- ~~how to iterate through background image urls and interpolate into CSS~~
  - forgot `Math.floor()` so I was always getting a decimal
  - this is the one exception to not using in-line style!
- ~~how to get `placeholder` in `textarea` to be at top on `TextForm` (and other similar forms)~~
  - tag is not `<input>` with `type='textarea'`, it's just a `<textarea>` tag
- ~~how to make new post form render within dashboard when button is clicked~~
  - `PostsGenerator` is an index route nested within `PostsFeed`(dashboard) and then all of the forms are children as well... So the `PostsGenerator` is displayed by default, and then it pushes to the specific form's nested url on click
- ~~how/where does filtering occur? (e.g. for a user to only see posts of people they follow, and for posts tagged with searched tag)~~
  - in the `index` action within the `PostsController`
- ~~current user unavailable in navbar (mixin not working?)~~
  - had to do an if/else that checked if there is a current user, otherwise tries immediately to render "Hi, [currentUser]!" before the asynchronous fetch is complete!

## In Progress

- make `Posts` components
  - ~~different form for every type of posts~~
- need to test all `Posts` actions
- cloudinary image hosting -- integrate with photo form and post request

## Questions

- ~~how does `componentWillMount` work differently than `onEnter` hooks? -- why is it not still fetching?~~
- how to make/add tags when submitted with posts; where should the new tag be created, if necessary? what about the tagging?
  - accepts nested attributes for
  - do they exist?
    - yes, create tagging
    - no, create tag and tagging
  - via posts controller
    - use a transaction!
- ~~how to make page autofocus on form (html tag doesn't seem to work)~~
  - capitalize FOCUS!
- ~~how to iterate through background image urls and interpolate into CSS~~
- ~~how to get `placeholder` in `textarea` to be at top on `TextForm` (and other similar forms)~~
- ~~how to make new post form render within dashboard when button is clicked~~
- ~~how/where does filtering occur? (e.g. for a user to only see posts of people they follow, and for posts tagged with searched tag)~~
- current user unavailable in navbar (mixin not working?)

## In Progress

- make `Posts` components
  - ~~different form for every type of posts~~
- need to test all `Posts` actions
- cloudinary image hosting -- integrate with photo form and post request

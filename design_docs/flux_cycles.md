# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document to trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Post Cycles

### Posts API Request Actions

* `fetchAllPosts`
  0. invoked from `PostsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/posts` is called.
  0. `receiveAllPosts` is set as the callback.

* `createPost`
  0. invoked from new post buttons `onClick`
  0. `POST /api/posts` is called.
  0. `type` is passed as data through AJAX request
  0. `receiveSinglePost` is set as the callback.

* `fetchSinglePost`
  0. invoked from `PostDetail` `didMount`/`willReceiveProps`
  0. `GET /api/posts/:id` is called.
  0. `receiveSinglePost` is set as the callback.

* `updatePost`
  0. invoked from `PostForm` `onSubmit`
  0. `POST /api/posts` is called.
  0. `receiveSinglePost` is set as the callback.

* `destroyPost`
  0. invoked from delete post button `onClick`
  0. `DELETE /api/posts/:id` is called.
  0. `removePost` is set as the callback.

### Posts API Response Actions

* `receiveAllPosts`
  0. invoked from an API callback.
  0. `Post` store updates `_posts` and emits change.

* `receiveSinglePost`
  0. invoked from an API callback.
  0. `Post` store updates `_posts[id]` and emits change.

* `removePost`
  0. invoked from an API callback.
  0. `Post` store removes `_posts[id]` and emits change.

### Store Listeners

* `PostsIndex` component listens to `Post` store.
* `PostDetail` component listens to `Post` store.




## Follow Cycles

### Follows API Request Actions

* `fetchAllFollows`
  0. invoked from `FollowsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/follows` is called.
  0. `receiveAllFollows` is set as the callback.

* `createFollow`
  0. invoked from new follow buttons `onClick`
  0. `POST /api/follows` is called.
  0. `receiveSingleFollow` is set as the callback.

* `destroyFollow`
  0. invoked from delete follow button `onClick`
  0. `DELETE /api/follows/:id` is called.
  0. `removeFollow` is set as the callback.

### Follows API Response Actions

* `receiveAllFollows`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows` and emits change.

* `receiveSingleFollow`
  0. invoked from an API callback.
  0. `Follow` store updates `_follows[id]` and emits change.

* `removeFollow`
  0. invoked from an API callback.
  0. `Follow` store removes `_follows[id]` and emits change.

### Store Listeners

* `FollowsIndex` component listens to `Follow` store.






## Note Cycles

### Notes API Request Actions

* `fetchAllNotes`
  0. invoked from `NotesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/notes` is called.
  0. `receiveAllNotes` is set as the callback.

* `createNote`
  0. invoked from new note buttons `onClick`
  0. `POST /api/notes` is called.
  0. `type` is passed as data through AJAX request
  0. `receiveSingleNote` is set as the callback.

* `destroyNote`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/notes/:id` is called.
  0. `removeNote` is set as the callback.

### Notes API Response Actions

* `receiveAllNotes`
  0. invoked from an API callback.
  0. `Note` store updates `_notes` and emits change.

* `receiveSingleNote`
  0. invoked from an API callback.
  0. `Note` store updates `_notes[id]` and emits change.

* `removeNote`
  0. invoked from an API callback.
  0. `Note` store removes `_notes[id]` and emits change.

### Store Listeners

* `NotesIndex` component listens to `Note` store.







## Tagging Cycles

### Taggings API Request Actions

* `fetchAllTaggings`
  0. invoked from `TaggingsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/taggings` is called.
  0. `receiveAllTaggings` is set as the callback.

* `createTagging`
  0. invoked from new tagging buttons `onClick`
  0. `POST /api/taggings` is called.
  0. `receiveSingleTagging` is set as the callback.

* `destroyTagging`
  0. invoked from delete tagging button `onClick`
  0. `DELETE /api/taggings/:id` is called.
  0. `removeTagging` is set as the callback.

### Taggings API Response Actions

* `receiveAllTaggings`
  0. invoked from an API callback.
  0. `Tagging` store updates `_taggings` and emits change.

* `receiveSingleTagging`
  0. invoked from an API callback.
  0. `Tagging` store updates `_taggings[id]` and emits change.

* `removeTagging`
  0. invoked from an API callback.
  0. `Tagging` store removes `_taggings[id]` and emits change.

### Store Listeners

* `TaggingsIndex` component listens to `Tagging` store.

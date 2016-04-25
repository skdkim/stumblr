# API Endpoints

## HTML API

### Root

- `GET /`

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Posts

- `GET /api/posts`
  - Posts index/search
  - accepts `tag_name` query param to list posts by tag
- `POST /api/posts`
- `GET /api/posts/:id`
- `PATCH /api/posts/:id`
- `DELETE /api/posts/:id`

### Followers

- `GET /api/user/:id/followers`
- `POST /api/user/:id/followers`
- `DELETE /api/user/:id/follower/:id`

### Tags

- A post's tags will be included in the post show template
- `GET /api/posts/:id/tags`
- `POST /api/posts/:id/tags`: add tag to note by name
- `DELETE /api/posts/:note_id/tags/:tag_id`

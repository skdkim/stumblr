# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key, indexed
postType    | string    | not null
title       | string    |
body        | text      |
content_url | string    |
author_id   | integer   | not null, foreign key (references users), indexed
_title, body, and content_url: cannot all be null_

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
blog_title      | string    |
blog_description| string    |
photo_id        | integer   |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## follows
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
follows_id      | integer   | not null, indexed
followed_id     | integer   | not null, indexed

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed
note_type   | string    | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag         | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | string    | not null, foreign key (references tags), indexed, unique [post_id]
post_id     | integer   | not null, foreign key (references posts), indexed, unique [tag_id]

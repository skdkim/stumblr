# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  username: 'robicha',
  blog_title: 'ROBICHA',
  blog_description: 'ryan. 21. nyc. pratt student.',
  photo_id: 1,
  password_digest: BCrypt::Password.create('ilovedogs'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'charlieadam',
  blog_title: 'colorado dreamin\'',
  blog_description: 'photos and thoughts from a boy in denver',
  photo_id: 2,
  password_digest: BCrypt::Password.create('denverforever'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'ninahill',
  blog_title: 'Nina Hill Photography',
  photo_id: 3,
  password_digest: BCrypt::Password.create('aperture'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'essiesh',
  blog_title: 'cats and queers',
  blog_description: 'essie, she/her, chicago. a lot of cats and coffee.',
  photo_id: 4,
  password_digest: BCrypt::Password.create('aviously'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'urbansketching',
  blog_title: 'Urban Sketching',
  blog_description: 'sketches done in any medium on-location, submitted by artists around the world',
  photo_id: 5,
  password_digest: BCrypt::Password.create('microns4life'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'medium-design',
  blog_title: 'Medium Design',
  blog_description: 'minimalist design studio located in calgary',
  photo_id: 6,
  password_digest: BCrypt::Password.create('sominimal'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'househunter',
  blog_title: 'Houses to Covet',
  blog_description: 'beautiful and inspiring houses around the globe',
  photo_id: 7,
  password_digest: BCrypt::Password.create('househunters'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'doubleu',
  blog_title: 'Double U',
  blog_description: 'Women\'s art, coding, and otherwise creative center in San Francisco',
  photo_id: 8,
  password_digest: BCrypt::Password.create('doublerainbowtho'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'planergoods',
  blog_title: 'planer goods',
  blog_description: 'custom wooden goods from a studio in lansing, mi',
  photo_id: 9,
  password_digest: BCrypt::Password.create('woodchips'),
  session_token: SecureRandom.urlsafe_base64(16)
)
User.create(
  username: 'streetwares',
  blog_title: 'STREETWARES',
  blog_description: 'urban. fashion. photography.',
  photo_id: 10,
  password_digest: BCrypt::Password.create('quashie'),
  session_token: SecureRandom.urlsafe_base64(16)
)




Post.create(
  postType: "text",
  title: "\'Note\' by W.S. Merwin",
  body: "Remember how the naked soul\n
          comes to language and at once knows\n
          loss and distance and believing\n

          then for a time it will not run\n
          with its old freedom\n
          like a light innocent of measure\n
          but will hearken to how\n
          one story becomes another\n
          and will try to hear where\n
          they have emerged from\n
          and where they are heading\n
          as though they were its own legend\n
          running before the words and beyond them\n
          naked and never looking back\n

          through the noise of questions",
  author_id: 4
)

Post.create(
  postType: "photo",
  title: "Comet Coffee",
  # content_id: # TODO: change link to photo id: https://c2.staticflickr.com/6/5714/23833989690_fa4a80c0e7_c.jpg,
  content_type: "photo",
  author_id: 4
)

Post.create(
  postType: "link",
  title: "Chani Nicholas: Horoscopes for April 25",
  # content_id: # TODO: add id for link: http://chaninicholas.com/2016/04/mercury-stations-retrograde-horoscopes-for-the-week-of-april-25th/,
  content_type: "link",
  author_id: 4
)

Post.create(
  postType: "audio",
  body: "The Weight of Things - Jeff Pianki",
  # content_id: # TODO: add id for mp3,
  content_type: "audio",
  author_id: 4
)

# Post.create(
#   postType: "photo",
#   # content_id: # TODO: add id for photo: https://c1.staticflickr.com/1/353/20071999428_504e5a5ca2_c.jpg,
#   content_type: "photo",
#   author_id: 4
# )
#
# Post.create(
# postType: "photo",
# # content_id: # TODO: change to photo id: https://c2.staticflickr.com/6/5611/15394468677_0278ee41e4_c.jpg,
# content_type: "photo",
# author_id: 2
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )
#
# Post.create(
#   postType: ,
#   title: ,
#   body: ,
#   content_id: ,
#   content_type: ,
#   author_id:
# )

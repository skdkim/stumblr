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

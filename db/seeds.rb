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
  post_type: "text",
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

# Post.create(
#   post_type: "photo",
#   title: "Comet Coffee",
#   # content_url: # TODO: change link to photo id: https://c2.staticflickr.com/6/5714/23833989690_fa4a80c0e7_c.jpg,
#   author_id: 4
# )

Post.create(
  post_type: "link",
  title: "Chani Nicholas: Horoscopes for April 25",
  content_url: 'http://chaninicholas.com/2016/04/mercury-stations-retrograde-horoscopes-for-the-week-of-april-25th/',
  author_id: 4
)

# Post.create(
#   post_type: "audio",
#   title: "Jeff Pianki",
#   body: "The Weight of Things",
#   # content_url: # TODO: add url for mp3,
#   author_id: 4
# )

# Post.create(
#   post_type: "photo",
#   # content_url: # TODO: add id for photo: https://c1.staticflickr.com/1/353/20071999428_504e5a5ca2_c.jpg,
#   author_id: 4
# )
#
# Post.create(
# post_type: "photo",
# # content_url: # TODO: change to photo id: https://c2.staticflickr.com/6/5611/15394468677_0278ee41e4_c.jpg,
# author_id: 2
# )

Post.create(
  post_type: "text",
  title: "Rocky Mountain National Park",
  body: "Hiked Deer Mountain. Saw an elk. Camped for a night. Hung out in Boulder. Sad and happy to be home now.",
  author_id: 2
)

Post.create(
  post_type: "video",
  content_url: "https://www.youtube.com/embed/I_PLLXgma9g",
  author_id: 2
)

Post.create(
  post_type: "quote",
  title: "John Muir",
  body: "The mountains are calling and I must go.",
  author_id: 2
)

# Post.create(
#   post_type: "audio",
#   title: "Beyonce",
#   body: "Sorry",
#   content_url: , # TODO: get song url
#   author_id: 2
# )
#
# Post.create(
#   post_type: "photo",
#   title: 'Deoksugung Art Museum',
#   body: 'By Lee Yong-hwan in Seoul, Korea',
#   content_url: # TODO: https://3.bp.blogspot.com/-2sN_ZAe9qfY/VyM1MDFMs1I/AAAAAAAAIdo/lyl2eBNWN6cNGNPMQlsA2XShmtlgZXEiwCLcB/s1600/%25EB%258D%2595%25EC%2588%2598%25EA%25B6%25811.jpg
#   author_id: 5
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://2.bp.blogspot.com/-3bUZJUOgAhE/TZwDt3A8tII/AAAAAAAAAsE/96h8ItJgGcI/s1600/4%2525Protesta2.jpg
#   author_id: 5
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: https://2.bp.blogspot.com/-HIxl_bzUoW0/VwG1d_rKVZI/AAAAAAAAFBg/dEqeQwtOriI3x2nJKwnp3Jl52D1NBpApw/s1600/Chris.jpg
#   author_id: 5
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Keong Saik Road in Singapore by Don Low",
#   content_url: , # TODO: http://farm8.staticflickr.com/7031/6394503361_da438fe112_z.jpg
#   author_id: 5
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://2.bp.blogspot.com/_kD17AY5ZZfw/SkT4OQUKlFI/AAAAAAAACXo/3TfwastAN9E/s1600/Mouraria1.jpg
#   author_id: 5
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://67.media.tumblr.com/5257ef9ed22369a5408c6abe0e8b677b/tumblr_o1dx47VPoL1qkohe4o1_1280.jpg
#   author_id: 1
# )
#
# Post.create(
#   post_type: "audio",
#   title: "Rhye",
#   body: "Open"
#   content_url: , # TODO: get song url
#   author_id: 1
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://41.media.tumblr.com/476d1c8b956c0fdc924ddf439d118ebb/tumblr_o4npy8QgQc1rl7jb2o1_1280.jpg
#   author_id: 1
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://41.media.tumblr.com/f1a91b65bbe384764fc395c9a78a5f94/tumblr_np30436Ld51tvued1o3_1280.jpg
#   author_id: 1
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://66.media.tumblr.com/e40789c92ec08ad6c0c2705d480a8744/tumblr_o0im7nBS0V1u7w7kwo1_1280.jpg
#   author_id: 1
# )
#
# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://payload381.cargocollective.com/1/8/269221/9935682/stangel_arizonacotton_08_1371.jpg
#   author_id: 3
# )
#
# Post.create(
#   post_type: "photo",
#   body: 'this weekend, Pt Reyes',
#   content_url: , # TODO: http://payload332.cargocollective.com/1/8/269221/8954476/Stangel_airbnb__Inverness_2014_13_1349.jpg
#   author_id: 3
# )
#
# Post.create(
#   post_type: "photo",
#   body: "shot for dwell magazine, 10/08/2015",
#   content_url: , # TODO: http://payload318.cargocollective.com/1/8/269221/8660547/jakestangel_dwellmaster_28_2048.jpg
#   author_id: 3
# )

Post.create(
  post_type: "video",
  body: "For all those who've been asking about my main camera...",
  content_url: "https://www.youtube.com/embed/pKSYEbbIdpc",
  author_id: 3
)

# Post.create(
#   post_type: "photo",
#   content_url: , # TODO: http://payload127.cargocollective.com/1/8/269221/4840624/jakestangel_bigsur_05_2048.jpg
#   author_id: 3
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Mont-Blanc Base Camp is a minimalist space located in Les Houches, France, designed by Kengo Kuma & Associates. Les Houches is a small village situated in the French Alpes, close to one of its most important peaks, the Mont-Blanc. The aim was to integrate as naturally as possible the project into the extraordinary mountainous landscape. The project host Blue Ice company which design and manufactures product for climbing and mountaineering as well as a business incubator. It constitute thus a micro hub in mountain equipment creation.",
#   content_url: , # TODO: http://40.media.tumblr.com/e0399f1b6a3edfdb14c804c42226b003/tumblr_o6apntBMUM1rvh1ydo1_1280.jpg
#   author_id: 6
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Karimoku New Standard Exhibition is a minimalist space located in Tokyo, Japan, constructed by TANK. The interior features large sliding doors on two sides of the exhibition, allowing visitors to feel welcomed into the space. The space itself is multi-leveled, with the main showroom area featuring double-height ceilings. The upper level has visual transparency to the entire floor below. Tiled flooring and colored metal wire partitions separate the various layouts.",
#   content_url: , # TODO: http://41.media.tumblr.com/7425699f203340a51341d89b11419ca7/tumblr_o67tuvYNFY1rvh1ydo1_1280.jpg
#   author_id: 6
# )
#
# Post.create(
#   post_type: "photo",
#   body: "House in Yashima is a minimalist residence located in Kagawa, Japan, designed by TENK. The home is characterized by a sloping roof that overhangs a balcony. The balcony wraps around the building to provide panoramic views across the city. The Japanese room is slightly elevated above the rest of the ground level programs, and is adjacent a small workstation surface. Access to the balcony is provided via a series of sliding doors that completely open to seamlessly integrate the interior with the outdoors.",
#   content_url: , # TODO: http://40.media.tumblr.com/031f9caa8e9d2ee283188269e04c67f6/tumblr_o4xe0lymZe1rvh1ydo1_1280.jpg
#   author_id: 6
# )
#
# Post.create(
#   post_type: "photo",
#   body: "La Consola is a minimalist design created by Brooklyn-based designer Spacio Terreno. This is a modular wall unit, which can be fit to size and fully customizable. Striving for the honesty of the material and the transparency of the detailing, the designers trimmed all the fat from La Consolas original sketch and left the honest frame and clear techniques. The unit is constructed of Black Finply, brass, and steel hardware.",
#   content_url: , # TODO: http://36.media.tumblr.com/eecdb4d500abfd15d4802525d3bb8544/tumblr_o4s19v4xwP1rvh1ydo1_1280.jpg
#   author_id: 6
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Apartment in Póvoa de Varzim is a minimalist house located in Póvoa de Varzim, Portugal, designed by Pitagoras Group. The project was based on the transformation of a 95m2 seafront apartment, for seasonal use, mainly out of the bathing season. The existing space permitted a program with a generous living room with included kitchen area, two suites, a niche with bunk beds, a communal bathroom, and a pantry. Once again, the chosen material – oak wood – was decisive in building a space identity.",
#   content_url: , # TODO: http://41.media.tumblr.com/9e7f93407f574e72bb288b88e5f7c4b0/tumblr_o39q3enjbH1rvh1ydo1_1280.jpg
#   author_id: 6
# )

Post.create(
  post_type: "link",
  title: "How to Buy a House",
  content_url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwiX9u2SgrjMAhVExGMKHSiqBtYQFghlMAk&url=http%3A%2F%2Fmichaelbluejay.com%2Fhouse%2F&usg=AFQjCNF6xRRtGYHxHwgrrXWjp6swdX0Hhw&sig2=2DFa2tYNt_Rxao-FDLKb9w",
  author_id: 7
)

# Post.create(
#   post_type: "photo",
#   title: 'Seattle Modern',
#   content_url: "http://www.idesignarch.com/wp-content/uploads/Genesee-Townhomes-Seattle_1.jpg",
#   author_id: 7
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Frank Lloyd Wright, of course",
#   content_url: , # TODO: https://nyoobserver.files.wordpress.com/2015/08/02_bwh.jpg?quality=80
#   author_id: 7
# )
#
# Post.create(
#   post_type: "quote",
#   title: "Norman Foster",
#   body: "Architecture is an expression of values.",
#   author_id: 7
# )
#
# Post.create(
#   post_type: "photo",
#   body: "Kyoto, Japan",
#   content_url: , # TODO: https://imagesus-ssl.homeaway.com/mda01/0d989c72-c4a1-4a9b-aa18-965f2e67fa38.1.10
#   author_id: 7
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 8
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 8
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 8
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 8
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 8
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 9
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 9
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 9
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 9
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 9
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 10
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 10
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 10
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 10
# )
#
# Post.create(
#   post_type: ,
#   title: ,
#   body: ,
#   content_url: ,
#   author_id: 10
# )

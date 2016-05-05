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
  password_digest: BCrypt::Password.create('ilovedogs'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229577/tumblr_o6h6fqU9ae1qasnrqo1_1280_koel9f.jpg"
)
User.create(
  username: 'charlieadam',
  blog_title: 'colorado dreamin\'',
  blog_description: 'photos and thoughts from a boy in denver',
  password_digest: BCrypt::Password.create('denverforever'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229733/15244718916_e790edd86c_q_ownptz.jpg"
)
User.create(
  username: 'ninahill',
  blog_title: 'Nina Hill Photography',
  password_digest: BCrypt::Password.create('aperture'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462230176/photoicon_kjmwwo.jpg"
)
User.create(
  username: 'essiesh',
  blog_title: 'cats and queers',
  blog_description: 'essie, she/her, chicago. a lot of cats and coffee.',
  password_digest: BCrypt::Password.create('aviously'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229746/7057493203_04039ff722_q_ffbl2j.jpg"
)
User.create(
  username: 'urbansketching',
  blog_title: 'Urban Sketching',
  blog_description: 'sketches done in any medium on-location, submitted by artists around the world',
  password_digest: BCrypt::Password.create('microns4life'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229469/15651153332_f359e9c425_q_ezpr67.jpg"
)
User.create(
  username: 'medium-design',
  blog_title: 'Medium Design',
  blog_description: 'minimalist design studio located in calgary',
  password_digest: BCrypt::Password.create('sominimal'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229456/11815476314_96e8c9c369_q_kqjl1g.jpg"
)
User.create(
  username: 'househunter',
  blog_title: 'Houses to Covet',
  blog_description: 'beautiful and inspiring houses around the globe',
  password_digest: BCrypt::Password.create('househunters'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462236009/icon2_ltf7zt.jpg"
)
User.create(
  username: 'doubleu',
  blog_title: 'Double U',
  blog_description: 'Women\'s art, coding, and otherwise creative center in San Francisco',
  password_digest: BCrypt::Password.create('doublerainbowtho'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229306/26157592854_6260be676d_q_hxhn7u.jpg"
)
User.create(
  username: 'planergoods',
  blog_title: 'planer goods',
  blog_description: 'custom wooden goods from a studio in lansing, mi',
  password_digest: BCrypt::Password.create('woodchips'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229398/5339452080_ebb69190fe_q_mp5x2b.jpg"
)
User.create(
  username: 'streetwares',
  blog_title: 'STREETWARES',
  blog_description: 'urban. fashion. photography.',
  password_digest: BCrypt::Password.create('quashie'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462229008/tumblr_nl4b8jwAT31qd9ql4o1_r1_1280_hltuzu.jpg"
)
User.create(
  username: 'guest',
  blog_title: 'Guest User',
  blog_description: 'just here stumbling upon cool blogs',
  password_digest: BCrypt::Password.create('guestlogin'),
  session_token: SecureRandom.urlsafe_base64(16),
  profile_image_url: "http://res.cloudinary.com/dn07p1frq/image/upload/c_crop,h_539,w_505/v1462399303/self_portrait_photography_durham_nc-2_t8bbjq.jpg"
)


Follow.create(follower_id: 11, followed_id: 1)
Follow.create(follower_id: 11, followed_id: 2)
Follow.create(follower_id: 11, followed_id: 3)
Follow.create(follower_id: 11, followed_id: 4)
Follow.create(follower_id: 11, followed_id: 5)
Follow.create(follower_id: 11, followed_id: 6)
Follow.create(follower_id: 11, followed_id: 7)
Follow.create(follower_id: 11, followed_id: 8)
Follow.create(follower_id: 11, followed_id: 9)
Follow.create(follower_id: 11, followed_id: 10)
Follow.create(follower_id: 1, followed_id: 2)
Follow.create(follower_id: 1, followed_id: 4)
Follow.create(follower_id: 1, followed_id: 5)
Follow.create(follower_id: 1, followed_id: 6)
Follow.create(follower_id: 1, followed_id: 8)
Follow.create(follower_id: 1, followed_id: 9)
Follow.create(follower_id: 1, followed_id: 10)
Follow.create(follower_id: 2, followed_id: 1)
Follow.create(follower_id: 2, followed_id: 2)
Follow.create(follower_id: 2, followed_id: 3)
Follow.create(follower_id: 2, followed_id: 6)
Follow.create(follower_id: 2, followed_id: 7)
Follow.create(follower_id: 2, followed_id: 9)
Follow.create(follower_id: 3, followed_id: 3)
Follow.create(follower_id: 3, followed_id: 5)
Follow.create(follower_id: 3, followed_id: 6)
Follow.create(follower_id: 3, followed_id: 7)
Follow.create(follower_id: 3, followed_id: 9)
Follow.create(follower_id: 3, followed_id: 10)
Follow.create(follower_id: 4, followed_id: 1)
Follow.create(follower_id: 4, followed_id: 3)
Follow.create(follower_id: 4, followed_id: 4)
Follow.create(follower_id: 4, followed_id: 7)
Follow.create(follower_id: 5, followed_id: 1)
Follow.create(follower_id: 5, followed_id: 2)
Follow.create(follower_id: 5, followed_id: 3)
Follow.create(follower_id: 5, followed_id: 5)
Follow.create(follower_id: 5, followed_id: 6)
Follow.create(follower_id: 5, followed_id: 8)
Follow.create(follower_id: 5, followed_id: 9)
Follow.create(follower_id: 5, followed_id: 10)
Follow.create(follower_id: 6, followed_id: 3)
Follow.create(follower_id: 6, followed_id: 4)
Follow.create(follower_id: 6, followed_id: 7)
Follow.create(follower_id: 6, followed_id: 9)
Follow.create(follower_id: 7, followed_id: 1)
Follow.create(follower_id: 7, followed_id: 2)
Follow.create(follower_id: 7, followed_id: 4)
Follow.create(follower_id: 7, followed_id: 6)
Follow.create(follower_id: 7, followed_id: 8)
Follow.create(follower_id: 7, followed_id: 10)
Follow.create(follower_id: 8, followed_id: 1)
Follow.create(follower_id: 8, followed_id: 2)
Follow.create(follower_id: 8, followed_id: 3)
Follow.create(follower_id: 8, followed_id: 4)
Follow.create(follower_id: 8, followed_id: 6)
Follow.create(follower_id: 8, followed_id: 7)
Follow.create(follower_id: 8, followed_id: 9)
Follow.create(follower_id: 9, followed_id: 5)
Follow.create(follower_id: 9, followed_id: 6)
Follow.create(follower_id: 9, followed_id: 7)
Follow.create(follower_id: 9, followed_id: 8)
Follow.create(follower_id: 9, followed_id: 9)
Follow.create(follower_id: 9, followed_id: 10)
Follow.create(follower_id: 10, followed_id: 1)
Follow.create(follower_id: 10, followed_id: 2)
Follow.create(follower_id: 10, followed_id: 3)
Follow.create(follower_id: 10, followed_id: 4)
Follow.create(follower_id: 10, followed_id: 6)
Follow.create(follower_id: 10, followed_id: 7)
Follow.create(follower_id: 10, followed_id: 8)
Follow.create(follower_id: 10, followed_id: 9)
Follow.create(follower_id: 10, followed_id: 10)




Tag.create(tag: "art")
Tag.create(tag: "photo")
Tag.create(tag: "sketch")
Tag.create(tag: "design")
Tag.create(tag: "music")
Tag.create(tag: "new york")
Tag.create(tag: "beyonce")
Tag.create(tag: "woodworking")
Tag.create(tag: "poem")



Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209301/Chris_ccrxrv.jpg",
  author_id: 5
)

Tagging.create(
  post_id: 1,
  tag_id: 1
)
Tagging.create(
  post_id: 1,
  tag_id: 2
)
Tagging.create(
  post_id: 1,
  tag_id: 3
)


Post.create(
  post_type: "audio",
  title: "Beyonce",
  body: "Sorry",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462209757/04_Sorry_p2gsso.m4a",
  author_id: 2
)

Tagging.create(
  post_id: 2,
  tag_id: 7
)
Tagging.create(
  post_id: 2,
  tag_id: 5
)



Post.create(
  post_type: "link",
  title: "Chani Nicholas: Horoscopes for April 25",
  content_url: 'http://chaninicholas.com/2016/04/mercury-stations-retrograde-horoscopes-for-the-week-of-april-25th/',
  author_id: 4
)

Post.create(
post_type: "photo",
body: 'Seattle Modern',
content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209586/Genesee-Townhomes-Seattle_1_wcehh1.jpg",
author_id: 7
)

Tagging.create(
  post_id: 4,
  tag_id: 2
)
Tagging.create(
  post_id: 4,
  tag_id: 4
)



Post.create(
post_type: "photo",
body: 'dream van',
content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462407941/stumblr/zbqxmqcc65wjdqrno4ib.jpg",
author_id: 11
)

Tagging.create(
  post_id: 5,
  tag_id: 2
)



Post.create(
  post_type: "text",
  title: "Rocky Mountain National Park",
  body: "Hiked Deer Mountain. Saw an elk. Camped for a night. Hung out in Boulder. Sad and happy to be home now.",
  author_id: 2
)

Post.create(
  post_type: "quote",
  title: "The mountains are calling and I must go.",
  body: "John Muir",
  author_id: 2
)


Post.create(
  post_type: "photo",
  body: "Karimoku New Standard Exhibition is a minimalist space located in Tokyo, Japan, constructed by TANK. The interior features large sliding doors on two sides of the exhibition, allowing visitors to feel welcomed into the space. The space itself is multi-leveled, with the main showroom area featuring double-height ceilings. The upper level has visual transparency to the entire floor below. Tiled flooring and colored metal wire partitions separate the various layouts.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209513/tumblr_o67tuvYNFY1rvh1ydo1_1280_olgf3h.jpg",
  author_id: 6
)

Tagging.create(
  post_id: 8,
  tag_id: 2
)
Tagging.create(
  post_id: 8,
  tag_id: 4
)

Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462215120/business_colors_tamtmn.jpg",
  author_id: 10
)


Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209268/4_2525Protesta2_o4zb8y.jpg",
  author_id: 5
)

Tagging.create(
  post_id: 10,
  tag_id: 1
)
Tagging.create(
  post_id: 10,
  tag_id: 2
)
Tagging.create(
  post_id: 10,
  tag_id: 3
)


Post.create(
  post_type: "photo",
  body: "We'll have this piece and a few others at the Renegade Craft Fair next weekend.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462221561/tumblr_nz3h31w9I61rqt26yo1_500_g8sl7u.jpg",
  author_id: 9
)

Tagging.create(
  post_id: 11,
  tag_id: 2
)
Tagging.create(
  post_id: 11,
  tag_id: 4
)
Tagging.create(
  post_id: 11,
  tag_id: 8
)



Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209354/tumblr_o1dx47VPoL1qkohe4o1_1280_pid7km.jpg",
  author_id: 1
)

Tagging.create(
  post_id: 12,
  tag_id: 2
)
Tagging.create(
  post_id: 12,
  tag_id: 6
)



Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209468/jakestangel_bigsur_05_2048_joricr.jpg",
  author_id: 3
)


Post.create(
  post_type: "photo",
  body: "autumn in massachusetts",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462402816/stumblr/beuqfdg8hiw9e7ccmifj.jpg",
  author_id: 11
)

Post.create(
  post_type: "photo",
  body: "Excited to have delivered our custom credenza to its new home yesterday",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462216572/cabanvil_qlvzmi.jpg",
  author_id: 9
)

Tagging.create(
  post_id: 15,
  tag_id: 8
)



Post.create(
  post_type: "audio",
  title: "Jeff Pianki",
  body: "The Weight of Us",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462209791/The_Weight_Of_Us_ouqodm.mp3",
  author_id: 4
)

Tagging.create(
  post_id: 16,
  tag_id: 5
)



Post.create(
post_type: "photo",
content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209705/15394468677_0278ee41e4_c_c7nhon.jpg",
author_id: 2
)


Post.create(
  post_type: "photo",
  body: "Apartment in Póvoa de Varzim is a minimalist house located in Póvoa de Varzim, Portugal, designed by Pitagoras Group. The project was based on the transformation of a 95m2 seafront apartment, for seasonal use, mainly out of the bathing season. The existing space permitted a program with a generous living room with included kitchen area, two suites, a niche with bunk beds, a communal bathroom, and a pantry. Once again, the chosen material – oak wood – was decisive in building a space identity.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209567/tumblr_o39q3enjbH1rvh1ydo1_1280_pifrn3.jpg",
  author_id: 6
)

Tagging.create(
  post_id: 18,
  tag_id: 2
)
Tagging.create(
  post_id: 18,
  tag_id: 4
)



Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462215120/comfy_summer_r4gzmi.jpg",
  author_id: 10
)


Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209385/tumblr_np30436Ld51tvued1o3_1280_hcx2mp.jpg",
  author_id: 1
)


Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209418/stangel_arizonacotton_08_1371_o3iyz0.jpg",
  author_id: 3
)

Post.create(
  post_type: "photo",
  body: "Mont-Blanc Base Camp is a minimalist space located in Les Houches, France, designed by Kengo Kuma & Associates. Les Houches is a small village situated in the French Alpes, close to one of its most important peaks, the Mont-Blanc. The aim was to integrate as naturally as possible the project into the extraordinary mountainous landscape. The project host Blue Ice company which design and manufactures product for climbing and mountaineering as well as a business incubator. It constitute thus a micro hub in mountain equipment creation.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209497/tumblr_o6apntBMUM1rvh1ydo1_1280_vrjlcq.jpg",
  author_id: 6
)

Tagging.create(
  post_id: 22,
  tag_id: 2
)
Tagging.create(
  post_id: 22,
  tag_id: 4
)



Post.create(
  post_type: "audio",
  title: "Quinn Leong",
  body: "Throwing Coins (Jeff Pianki cover)",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462214646/forlucy_ojlkux.mp3",
  author_id: 8
)

Tagging.create(
  post_id: 23,
  tag_id: 5
)



Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462214946/Van6_dj87jo.jpg",
  author_id: 10
)

Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209689/20071999428_504e5a5ca2_c_rsvkwt.jpg",
  author_id: 4
)

Post.create(
  post_type: "audio",
  title: "Alt-J",
  body: "Tessellate (remix)",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462402756/alt-j%20-%20tessellate.mp3",
  author_id: 11
)

Post.create(
post_type: "link",
title: "Stupid Shit No One Needs and Terrible Ideas Hackathon",
content_url: "https://www.eventbrite.com/e/stupid-shit-no-one-needs-terrible-ideas-hackathon-20-tickets-24538294700",
author_id: 8
)

Post.create(
  post_type: "photo",
  body: "House in Yashima is a minimalist residence located in Kagawa, Japan, designed by TENK. The home is characterized by a sloping roof that overhangs a balcony. The balcony wraps around the building to provide panoramic views across the city. The Japanese room is slightly elevated above the rest of the ground level programs, and is adjacent a small workstation surface. Access to the balcony is provided via a series of sliding doors that completely open to seamlessly integrate the interior with the outdoors.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209529/tumblr_o4xe0lymZe1rvh1ydo1_1280_l85izq.jpg",
  author_id: 6
)

Tagging.create(
  post_id: 28,
  tag_id: 2
)
Tagging.create(
  post_id: 28,
  tag_id: 4
)




Post.create(
  post_type: "link",
  title: "How to Buy a House",
  content_url: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=10&cad=rja&uact=8&ved=0ahUKEwiX9u2SgrjMAhVExGMKHSiqBtYQFghlMAk&url=http%3A%2F%2Fmichaelbluejay.com%2Fhouse%2F&usg=AFQjCNF6xRRtGYHxHwgrrXWjp6swdX0Hhw&sig2=2DFa2tYNt_Rxao-FDLKb9w",
  author_id: 7
)


Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209371/tumblr_o4npy8QgQc1rl7jb2o1_1280_wmtnws.jpg",
  author_id: 1
)

Post.create(
  post_type: "photo",
  body: "Hand-made cutting boards available in our shop for a limited time",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462215424/IMG_5914_cbjuuj.jpg",
  author_id: 9
)

Tagging.create(
  post_id: 31,
  tag_id: 8
)



Post.create(
  post_type: "photo",
  body: "shot for dwell magazine, 10/08/2015",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209452/jakestangel_dwellmaster_28_2048_vyy4ze.jpg",
  author_id: 3
)


Post.create(
  post_type: "photo",
  body: "Comet Coffee",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209668/23833989690_fa4a80c0e7_c_rld4yd.jpg",
  author_id: 4
)

Post.create(
  post_type: "photo",
  body: 'Deoksugung Art Museum, by Lee Yong-hwan in Seoul, Korea',
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209216/25EB_258D_2595_25EC_2588_2598_25EA_25B6_25811_dco0sj.jpg",
  author_id: 5
)

Tagging.create(
  post_id: 34,
  tag_id: 1
)
Tagging.create(
  post_id: 34,
  tag_id: 2
)
Tagging.create(
  post_id: 34,
  tag_id: 3
)



Post.create(
  post_type: "video",
  body: "For all those who've been asking about my main camera...",
  content_url: "https://www.youtube.com/embed/pKSYEbbIdpc",
  author_id: 3
)


Post.create(
  post_type: "text",
  title: "Drawing/painting time this Wednesday at 6:30pm!",
  body: "Come by DU on Wednesday evening (April 13, 6:30-8:30 pm) to practice drawing, painting, or work on other kinds of projects! We have some watercolor, ink, pencils, paper, and other supplies, and you can bring your own favorites. Sometimes people even bring some to share - you can try something new.What you work on is up to you! For example, you could find a person to trade practicing drawing/painting portraits of each other, or figure out a fun still life from the things at the space.",
  author_id: 8
)


Post.create(
  post_type: "photo",
  body: "Frank Lloyd Wright",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209604/02_bwh_jwjidw.jpg",
  author_id: 7
)

Tagging.create(
  post_id: 37,
  tag_id: 2
)
Tagging.create(
  post_id: 37,
  tag_id: 4
)




Post.create(
  post_type: "photo",
  body: "Some inspiration from our friends at Brooklyn-based Bellboy",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462215416/Bellboy_20Familj_005_ba0clf.jpg",
  author_id: 9
)

Tagging.create(
  post_id: 38,
  tag_id: 2
)
Tagging.create(
  post_id: 38,
  tag_id: 4
)




Post.create(
  post_type: "photo",
  body: "Keong Saik Road in Singapore by Don Low",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209325/6394503361_da438fe112_z_jfa4ei.jpg",
  author_id: 5
)

Tagging.create(
  post_id: 39,
  tag_id: 1
)
Tagging.create(
  post_id: 39,
  tag_id: 2
)
Tagging.create(
  post_id: 39,
  tag_id: 3
)


Post.create(
  post_type: "quote",
  title: "I dreamed I was a butterfly, flitting around in the sky; then I awoke. Now I wonder: Am I a man who dreamt of being a butterfly, or am I a butterfly dreaming that I am a man?",
  body: "Zhuang Zhou",
  author_id: 11
)




Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462215119/casual_suit_my7q2o.jpg",
  author_id: 10
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

Tagging.create(
  post_id: 42,
  tag_id: 9
)




Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209399/tumblr_o0im7nBS0V1u7w7kwo1_1280_swwift.jpg",
  author_id: 1
)

Post.create(
  post_type: "audio",
  title: "Kiersten Holine",
  body: "Queen of Hearts Blues",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462214701/02_Queen_of_Hearts_Blues_ft._Caleb_Groh_al02et.mp3",
  author_id: 8
)

Tagging.create(
  post_id: 44,
  tag_id: 5
)



Post.create(
  post_type: "photo",
  body: "La Consola is a minimalist design created by Brooklyn-based designer Spacio Terreno. This is a modular wall unit, which can be fit to size and fully customizable. Striving for the honesty of the material and the transparency of the detailing, the designers trimmed all the fat from La Consolas original sketch and left the honest frame and clear techniques. The unit is constructed of Black Finply, brass, and steel hardware.",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209547/tumblr_o4s19v4xwP1rvh1ydo1_1280_hevpxm.jpg",
  author_id: 6
)

Tagging.create(
  post_id: 45,
  tag_id: 2
)
Tagging.create(
  post_id: 45,
  tag_id: 4
)




Post.create(
  post_type: "quote",
  title: "Architecture is an expression of values.",
  body: "Norman Foster",
  author_id: 7
)

Post.create(
  post_type: "link",
  title: "DoubleU Featured in Bitch Magazine!",
  content_url: "https://bitchmedia.org/article/double-union",
  author_id: 8
)

Post.create(
  post_type: "photo",
  body: "Prototype for a new table design, available this summer!",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462221439/IMG_5644_bv0gcp.jpg",
  author_id: 9
)

Tagging.create(
  post_id: 48,
  tag_id: 2
)
Tagging.create(
  post_id: 48,
  tag_id: 8
)



Post.create(
  post_type: "photo",
  body: 'This weekend @ Pt Reyes',
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209436/Stangel_airbnb__Inverness_2014_13_1349_enqohz.jpg",
  author_id: 3
)


Post.create(
  post_type: "video",
  content_url: "https://www.youtube.com/embed/I_PLLXgma9g",
  author_id: 2
)


Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462214930/Sean10_jrbnzn.jpg",
  author_id: 10
)

Post.create(
  post_type: "photo",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209337/Mouraria1_oasrwk.jpg",
  author_id: 5
)

Tagging.create(
  post_id: 52,
  tag_id: 1
)
Tagging.create(
  post_id: 52,
  tag_id: 2
)
Tagging.create(
  post_id: 52,
  tag_id: 3
)


Post.create(
  post_type: "photo",
  body: "Kyoto, Japan",
  content_url: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462209623/0d989c72-c4a1-4a9b-aa18-965f2e67fa38.1_ksibyq.jpg",
  author_id: 7
)

Tagging.create(
  post_id: 53,
  tag_id: 2
)



Post.create(
  post_type: "video",
  body: "Efterklang's Piramida",
  content_url: "https://www.youtube.com/embed/uiKK7ehFYtA",
  author_id: 11
)



Post.create(
  post_type: "audio",
  title: "Rhye",
  body: "Open",
  content_url: "http://res.cloudinary.com/dn07p1frq/video/upload/v1462215859/01_Open_wz1i8n.m4a",
  author_id: 1
)

Tagging.create(
  post_id: 55,
  tag_id: 5
)








Like.create(user_id: 1, post_id: 1)
Like.create(user_id: 1, post_id: 3)
Like.create(user_id: 1, post_id: 4)
Like.create(user_id: 1, post_id: 5)
Like.create(user_id: 1, post_id: 8)
Like.create(user_id: 1, post_id: 10)
Like.create(user_id: 1, post_id: 22)
Like.create(user_id: 1, post_id: 25)
Like.create(user_id: 1, post_id: 26)
Like.create(user_id: 1, post_id: 34)
Like.create(user_id: 1, post_id: 37)
Like.create(user_id: 1, post_id: 42)
Like.create(user_id: 1, post_id: 49)
Like.create(user_id: 1, post_id: 53)
Like.create(user_id: 2, post_id: 5)
Like.create(user_id: 2, post_id: 7)
Like.create(user_id: 2, post_id: 9)
Like.create(user_id: 2, post_id: 14)
Like.create(user_id: 2, post_id: 16)
Like.create(user_id: 2, post_id: 19)
Like.create(user_id: 2, post_id: 23)
Like.create(user_id: 2, post_id: 27)
Like.create(user_id: 2, post_id: 30)
Like.create(user_id: 2, post_id: 33)
Like.create(user_id: 2, post_id: 37)
Like.create(user_id: 2, post_id: 39)
Like.create(user_id: 2, post_id: 41)
Like.create(user_id: 2, post_id: 44)
Like.create(user_id: 2, post_id: 46)
Like.create(user_id: 2, post_id: 48)
Like.create(user_id: 2, post_id: 51)
Like.create(user_id: 2, post_id: 52)
Like.create(user_id: 3, post_id: 2)
Like.create(user_id: 3, post_id: 7)
Like.create(user_id: 3, post_id: 9)
Like.create(user_id: 3, post_id: 12)
Like.create(user_id: 3, post_id: 15)
Like.create(user_id: 3, post_id: 18)
Like.create(user_id: 3, post_id: 21)
Like.create(user_id: 3, post_id: 28)
Like.create(user_id: 3, post_id: 36)
Like.create(user_id: 3, post_id: 40)
Like.create(user_id: 3, post_id: 42)
Like.create(user_id: 3, post_id: 50)
Like.create(user_id: 4, post_id: 1)
Like.create(user_id: 4, post_id: 4)
Like.create(user_id: 4, post_id: 5)
Like.create(user_id: 4, post_id: 8)
Like.create(user_id: 4, post_id: 10)
Like.create(user_id: 4, post_id: 13)
Like.create(user_id: 4, post_id: 15)
Like.create(user_id: 4, post_id: 16)
Like.create(user_id: 4, post_id: 19)
Like.create(user_id: 4, post_id: 23)
Like.create(user_id: 4, post_id: 26)
Like.create(user_id: 4, post_id: 27)
Like.create(user_id: 4, post_id: 29)
Like.create(user_id: 4, post_id: 31)
Like.create(user_id: 4, post_id: 32)
Like.create(user_id: 4, post_id: 34)
Like.create(user_id: 4, post_id: 36)
Like.create(user_id: 4, post_id: 37)
Like.create(user_id: 4, post_id: 39)
Like.create(user_id: 4, post_id: 40)
Like.create(user_id: 4, post_id: 41)
Like.create(user_id: 4, post_id: 43)
Like.create(user_id: 4, post_id: 44)
Like.create(user_id: 4, post_id: 45)
Like.create(user_id: 4, post_id: 47)
Like.create(user_id: 4, post_id: 48)
Like.create(user_id: 4, post_id: 49)
Like.create(user_id: 4, post_id: 50)
Like.create(user_id: 4, post_id: 54)
Like.create(user_id: 4, post_id: 55)
Like.create(user_id: 5, post_id: 2)
Like.create(user_id: 5, post_id: 3)
Like.create(user_id: 5, post_id: 6)
Like.create(user_id: 5, post_id: 8)
Like.create(user_id: 5, post_id: 11)
Like.create(user_id: 5, post_id: 14)
Like.create(user_id: 5, post_id: 16)
Like.create(user_id: 5, post_id: 22)
Like.create(user_id: 5, post_id: 26)
Like.create(user_id: 5, post_id: 28)
Like.create(user_id: 5, post_id: 29)
Like.create(user_id: 5, post_id: 31)
Like.create(user_id: 5, post_id: 33)
Like.create(user_id: 5, post_id: 34)
Like.create(user_id: 5, post_id: 36)
Like.create(user_id: 5, post_id: 37)
Like.create(user_id: 5, post_id: 44)
Like.create(user_id: 5, post_id: 45)
Like.create(user_id: 5, post_id: 46)
Like.create(user_id: 5, post_id: 48)
Like.create(user_id: 5, post_id: 49)
Like.create(user_id: 5, post_id: 51)
Like.create(user_id: 5, post_id: 53)
Like.create(user_id: 5, post_id: 55)
Like.create(user_id: 6, post_id: 1)
Like.create(user_id: 6, post_id: 2)
Like.create(user_id: 6, post_id: 3)
Like.create(user_id: 6, post_id: 4)
Like.create(user_id: 6, post_id: 9)
Like.create(user_id: 6, post_id: 13)
Like.create(user_id: 6, post_id: 15)
Like.create(user_id: 6, post_id: 17)
Like.create(user_id: 6, post_id: 19)
Like.create(user_id: 6, post_id: 22)
Like.create(user_id: 6, post_id: 25)
Like.create(user_id: 6, post_id: 27)
Like.create(user_id: 6, post_id: 29)
Like.create(user_id: 6, post_id: 33)
Like.create(user_id: 6, post_id: 35)
Like.create(user_id: 6, post_id: 37)
Like.create(user_id: 6, post_id: 39)
Like.create(user_id: 6, post_id: 44)
Like.create(user_id: 6, post_id: 45)
Like.create(user_id: 6, post_id: 48)
Like.create(user_id: 6, post_id: 50)
Like.create(user_id: 6, post_id: 52)
Like.create(user_id: 6, post_id: 54)
Like.create(user_id: 7, post_id: 2)
Like.create(user_id: 7, post_id: 3)
Like.create(user_id: 7, post_id: 5)
Like.create(user_id: 7, post_id: 7)
Like.create(user_id: 7, post_id: 9)
Like.create(user_id: 7, post_id: 10)
Like.create(user_id: 7, post_id: 22)
Like.create(user_id: 7, post_id: 25)
Like.create(user_id: 7, post_id: 27)
Like.create(user_id: 7, post_id: 29)
Like.create(user_id: 7, post_id: 33)
Like.create(user_id: 7, post_id: 34)
Like.create(user_id: 7, post_id: 37)
Like.create(user_id: 7, post_id: 39)
Like.create(user_id: 7, post_id: 41)
Like.create(user_id: 7, post_id: 43)
Like.create(user_id: 7, post_id: 44)
Like.create(user_id: 7, post_id: 47)
Like.create(user_id: 7, post_id: 50)
Like.create(user_id: 7, post_id: 53)
Like.create(user_id: 7, post_id: 55)
Like.create(user_id: 8, post_id: 1)
Like.create(user_id: 8, post_id: 3)
Like.create(user_id: 8, post_id: 4)
Like.create(user_id: 8, post_id: 7)
Like.create(user_id: 8, post_id: 9)
Like.create(user_id: 8, post_id: 13)
Like.create(user_id: 8, post_id: 15)
Like.create(user_id: 8, post_id: 17)
Like.create(user_id: 8, post_id: 20)
Like.create(user_id: 8, post_id: 33)
Like.create(user_id: 8, post_id: 36)
Like.create(user_id: 8, post_id: 38)
Like.create(user_id: 8, post_id: 41)
Like.create(user_id: 8, post_id: 44)
Like.create(user_id: 8, post_id: 45)
Like.create(user_id: 8, post_id: 47)
Like.create(user_id: 8, post_id: 49)
Like.create(user_id: 8, post_id: 51)
Like.create(user_id: 8, post_id: 52)
Like.create(user_id: 9, post_id: 3)
Like.create(user_id: 9, post_id: 16)
Like.create(user_id: 9, post_id: 18)
Like.create(user_id: 9, post_id: 22)
Like.create(user_id: 9, post_id: 24)
Like.create(user_id: 9, post_id: 27)
Like.create(user_id: 9, post_id: 33)
Like.create(user_id: 9, post_id: 45)
Like.create(user_id: 9, post_id: 49)
Like.create(user_id: 9, post_id: 50)
Like.create(user_id: 9, post_id: 54)
Like.create(user_id: 10, post_id: 2)
Like.create(user_id: 10, post_id: 4)
Like.create(user_id: 10, post_id: 15)
Like.create(user_id: 10, post_id: 20)
Like.create(user_id: 10, post_id: 23)
Like.create(user_id: 10, post_id: 25)
Like.create(user_id: 10, post_id: 28)
Like.create(user_id: 10, post_id: 37)
Like.create(user_id: 10, post_id: 39)
Like.create(user_id: 10, post_id: 40)
Like.create(user_id: 10, post_id: 41)
Like.create(user_id: 10, post_id: 42)
Like.create(user_id: 10, post_id: 49)
Like.create(user_id: 10, post_id: 51)
Like.create(user_id: 10, post_id: 55)
Like.create(user_id: 11, post_id: 4)
Like.create(user_id: 11, post_id: 7)
Like.create(user_id: 11, post_id: 13)
Like.create(user_id: 11, post_id: 15)
Like.create(user_id: 11, post_id: 19)
Like.create(user_id: 11, post_id: 22)
Like.create(user_id: 11, post_id: 24)
Like.create(user_id: 11, post_id: 29)
Like.create(user_id: 11, post_id: 33)
Like.create(user_id: 11, post_id: 36)
Like.create(user_id: 11, post_id: 38)
Like.create(user_id: 11, post_id: 41)
Like.create(user_id: 11, post_id: 44)
Like.create(user_id: 11, post_id: 49)
Like.create(user_id: 11, post_id: 54)

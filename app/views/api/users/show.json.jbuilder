json.extract! @user, :username, :id, :profile_image_url, :blog_title, :blog_description

json.liked_posts @user.liked_posts.map { |post| post.id }

json.followers @user.followers.map { |follower| follower.id }
json.followeds @user.followeds.map { |followed| followed.id }

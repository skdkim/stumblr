json.extract! @user, :username, :id, :profile_image_url

json.liked_posts @user.liked_posts.map { |post| post.id }

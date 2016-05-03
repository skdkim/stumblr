class UpdatePictureUrlAgain < ActiveRecord::Migration
  def change
    change_column_default :users, :profile_image_url, "http://res.cloudinary.com/dn07p1frq/image/upload/v1462228620/anonymous_bij7md.png"
  end
end

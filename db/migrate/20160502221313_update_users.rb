class UpdateUsers < ActiveRecord::Migration
  def change
    add_column :users, :profile_image_url, :string, null: false, default: "http://res.cloudinary.com/dn07p1frq/image/upload/v1462227384/anonymous_skqcga.png"
  end
end

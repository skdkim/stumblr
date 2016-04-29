class FixPostType < ActiveRecord::Migration
  def change
    remove_column :posts, :postType, :string
    add_column :posts, :post_type, :string
  end
end

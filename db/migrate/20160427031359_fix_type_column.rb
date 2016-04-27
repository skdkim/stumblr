class FixTypeColumn < ActiveRecord::Migration
  def change
    remove_column :posts, :type, :string
    add_column :posts, :postType, :string
  end
end

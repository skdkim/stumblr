class FixContentProp < ActiveRecord::Migration
  def change
    remove_column :posts, :content_id, :integer
    remove_column :posts, :content_type, :string
    add_column :posts, :content_url, :string
  end
end

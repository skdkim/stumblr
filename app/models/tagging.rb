class Tagging < ActiveRecord::Base
  validates :tag_id, :post_id, presence: true

  belongs_to :posts
  belongs_to :tags

end

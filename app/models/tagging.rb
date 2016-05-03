class Tagging < ActiveRecord::Base
  validates :tag_id, :post_id, presence: true

  belongs_to :post
  belongs_to :tag

end

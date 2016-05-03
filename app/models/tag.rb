class Tag < ActiveRecord::Base
  validates :tag, presence: true

  has_many :taggings

  belongs_to :post,
    through: :taggings,
    source: :posts
end

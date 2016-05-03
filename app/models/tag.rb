class Tag < ActiveRecord::Base
  validates :tag, presence: true

  has_many :taggings

  has_many :posts,
    through: :taggings,
    source: :post
end

class Note < ActiveRecord::Base
  validates :author_id, :noter_id, :post_id, :note_type, presence: true

  belongs_to :posts
end

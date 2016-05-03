class Post < ActiveRecord::Base
  validates :post_type, :author_id, presence: true
  validates :title, presence: true, if: :body_and_content_url_null?
  validates :body, presence: true, if: :title_and_content_url_null?
  validates :content_url, presence: true, if: :body_and_title_null?

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  has_many :taggings
  has_many :tags,
      through: :taggings,
      source: :tag

  has_many :notes

  has_many :likes
  has_many :liking_users,
    through: :likes,
    source: :user

  def body_and_content_url_null?
    return true unless body || content_url
    false
  end

  def title_and_content_url_null?
    return true unless title || content_url
    false
  end

  def body_and_title_null?
    return true unless body || title
    false
  end

end

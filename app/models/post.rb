class Post < ActiveRecord::Base
  validates :postType, :author_id, presence: true
  validates :title, presence: true, if: :body_and_content_id_null?
  validates :body, presence: true, if: :title_and_content_id_null?
  validates :content_id, presence: true, if: :body_and_title_null?

  belongs_to :author,
    foreign_key: :author_id,
    primary_key: :id,
    class_name: :User

  def body_and_content_id_null?
    return true unless body || content_id
    false
  end

  def title_and_content_id_null?
    return true unless title || content_id
    false
  end

  def body_and_title_null?
    return true unless body || title
    false
  end

end

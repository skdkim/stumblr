class Post < ActiveRecord::Base
  validates :type, :author_id, presence: true
  validates :content_id, :author_id, numericality: true
  validates :title, presence: true, if :other_content_null?(:title)
  validates :body, presence: true, if :other_content_null?(:body)
  validates :content_id, presence: true, if :other_content_null?(:content_id)

  def other_content_null?(current_column)
    if current_column == :title
      return true unless :body || :content_id
    elsif current_column == :body
      return true unless :title || :content_id
    else
      return true unless :body || :content_id
    end
    false
  end

end

class User < ActiveRecord::Base
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :posts,
    foreign_key: :author_id,
    class_name: :Post

  has_many :follows,
    foreign_key: :followed_id,
    class_name: :Follow
  has_many :followers,
    through: :follows,
    source: :follower

  has_many :followings,
  foreign_key: :follower_id,
  class_name: :Follow
  has_many :followeds,
    through: :followings,
    source: :followed

  has_many :likes
  has_many :liked_posts,
    through: :likes,
    source: :post



  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username)
    if user && user.is_password?(pw)
      return user
    end
    nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end

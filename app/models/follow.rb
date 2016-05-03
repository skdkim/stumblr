class Follow < ActiveRecord::Base
  belongs_to :followers,
    class_name: :User

  belongs_to :followeds,
    class_name: :User

end

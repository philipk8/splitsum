class Friend < ApplicationRecord
  validates :user_id, uniqueness: { scope: :friend_id}
  validates :user_id, :friend_id, prescence: true

  belongs_to :user,
    foreign_key: :friend_id,
    class_name: :User

end

class Friend < ApplicationRecord
  validates :user_id, uniqueness: { scope: :friend_id}
  validates :user_id, :friend_id, presence: true

  # belongs_to :user,
  #   foreign_key: :friend_id,
  #   class_name: :User

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User



  # has_many :friends,
  # foreign

  # def self.find_by_ids(user_id, friend_id)
  #   found_friend = Friend
  #   .where(user_id: user_id )
  #   .where(friend_id: friend_id)

  #   debugger 

  #   return found_friend.as_json
  # end

  # def owe_user 
  #   debugger
  #   paid_expenses = current_user.paid_expenses
  #   debugger
  #   paid_expenses_friend = paid_expenses.where(split_by_id = self.id)
  #   debugger
  # end

end

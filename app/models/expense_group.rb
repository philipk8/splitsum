class ExpenseGroup < ApplicationRecord
  validates :expense_id, :split_with_id, :paid_by_id, presence: true

  belongs_to :expense,
  foreign_key: :expense_id,
  class_name: :ExpenseDetail

  belongs_to :split_with_user,
  foreign_key: :split_with_id,
  class_name: :User

  belongs_to :paid_by_user,
  foreign_key: :paid_by_id,
  class_name: :User



end

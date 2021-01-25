class ExpenseGroup < ApplicationRecord
  validates :expense_id, :split_with_id, :paid_by_id, presence: true
  
  
end

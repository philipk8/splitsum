class ExpenseDetail < ApplicationRecord
  validates :author_id, :amount, presence: true
  

end

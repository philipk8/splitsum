class ExpenseDetail < ApplicationRecord
  validates :author_id, presence: true
 
  
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :expense_groups,
  foreign_key: :expense_id,
  class_name: :ExpenseGroup

  


end

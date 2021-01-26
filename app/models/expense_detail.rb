class ExpenseDetail < ApplicationRecord
  validates :author_id, presence: true
 
  
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  has_many :expense_groups,
  dependent: :destroy,
  foreign_key: :expense_id,
  class_name: :ExpenseGroup

  def to_hash 

    return {
      id: self.id,
      author_id: self.author_id,
      category: self.category,
      description: self.description,
      amount: self.amount,
      notes: self.notes
    }
  end

  def calc_split

  
    expense_group = self.expense_groups

    amount = self.amount

    num = expense_group.count()

    each_pay = amount / num 

    hash = {}

    expense_group.each do |expense_line|
  
      hash[expense_line.split_with_id] = each_pay 

    end

    return hash
  end



end

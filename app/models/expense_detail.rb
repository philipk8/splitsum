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
    amount = self.amount * 1.00
    num = expense_group.count()
    each_pay = amount / num * 1.00
    hash = {}
    expense_group.each do |expense_line|
      hash[expense_line.split_with_id] = each_pay 
    end

    return hash
  end

  def paid_by_id 
    expense_group = self.expense_groups
    return expense_group.first.paid_by_id
  end





end

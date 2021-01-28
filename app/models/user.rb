class User < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :name, presence: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token
  
  has_many :friendships,
  foreign_key: :user_id,
  class_name: :Friend

  has_many :expenses_authored,
  foreign_key: :author_id,
  class_name: :ExpenseDetail

  has_many :split_with_expenses,
  foreign_key: :split_with_id,
  class_name: :ExpenseGroup
  
  has_many :paid_expenses,
  foreign_key: :paid_by_id,
  class_name: :ExpenseGroup

  has_many :paid_expenses_details,
  through: :paid_expenses,
  source: :expense

  def you_are_owed
    # self.paid_expenses
    paid_expenses = self.paid_expenses
    total_records = paid_expenses.count(:id)
    # distinct_expenses = paid_expenses.count(:expense_id)
    
    expense_ids = paid_expenses.pluck(:expense_id)
    distinct_expense_ids = expense_ids.uniq
    
    
    share_count_owed = total_records - distinct_expense_ids.count()
    
    # debugger

    sum = 0 
    distinct_expense_ids.each do |expense_id|
      expense_item = ExpenseDetail.find(expense_id)
      expense_amount = expense_item.amount
      sum += expense_amount
    end

    if total_records == 0 
      each_share = 0 
    else 
    each_share = sum / total_records
    end

    # debugger
    
    owed_to_you = each_share * share_count_owed
    
    return owed_to_you

    #  paid_expenses.each do |expense|
    #   sum = 0
    #   amount = ExpenseDetail.find(expense.expense_id)
    #   if expense.split_with_id != current_user.id

    #   end
    # end
  end
  
  def you_owe
    split_with_rows = self.split_with_expenses
    total_split_num = split_with_rows.count()
  
    rows_didnt_pay = split_with_rows.where.not(paid_by_id: self.id)
    liable_split_num = rows_didnt_pay.count()
    expense_ids = rows_didnt_pay.pluck(:expense_id).uniq

    expense_group_rows = ExpenseGroup.where(:expense_id => [expense_ids]).count()

# debugger 
    sum = 0 
    expense_ids.each do |expense_id|
      expense_item = ExpenseDetail.find(expense_id)
      expense_amount = expense_item.amount
      sum += expense_amount
    end

    if expense_group_rows == 0 
      each_share = 0
    else
    each_share = sum / expense_group_rows
    end

    
    owed_by_you = each_share * liable_split_num
# debugger
    
    return owed_by_you
  end

  def total_balance
    return self.you_are_owed - self.you_owe
  end



  def friend_names

    friend_id_arr = self.friendships.pluck(:friend_id)

    # arr = []

    # friend_id_arr.each do |id|
    #   arr << User.where(id: id).pluck(:name)
    # end

    return User.find(friend_id_arr).pluck(:name)

  end

  def friend_list

    friend_id_arr = self.friendships.pluck(:friend_id)

    # arr = []

    # friend_id_arr.each do |id|
    #   arr << User.where(id: id).pluck(:name)
    # end
    return User.find(friend_id_arr)
    # finding the users by the friend_id
    # so i will get the persons id or friend.id back

  end

   

  
  # FIPA GERV

  def self.find_by_credentials(email, password)
      user = User.find_by(email: email)

      if user && user.is_password?(password)
          return user
      else
          return nil
      end

  end

  def is_password?(password)
      bp = BCrypt::Password.new(self.password_digest)
      bp.is_password?(password)
  end


  def password=(password)
      @password = password
      bp = BCrypt::Password.create(password)
      self.password_digest = bp
  end


  def reset_session_token!
      self.update!(session_token: self.class.generate_session_token)
      self.session_token
  end

  private 

  def ensure_session_token
      self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
      SecureRandom::urlsafe_base64
  end

end

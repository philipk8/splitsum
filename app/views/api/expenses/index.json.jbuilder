
  @expense_details_records.each do |expense|
    # debugger
    json.set! expense.id do
      json.partial! "api/expenses/expense", expense: expense
    end
  end

#   @users.each do |user|
#   json.set! user.id do
#     json.partial! 'api/users/user', user: user
#   end
# end
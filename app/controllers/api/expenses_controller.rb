class Api::ExpensesController < ApplicationController

  def create

    debugger

    @expense = ExpenseDetail.create(expense_params)
    expense_id = @expense.id
    payees_arr = params[:expense][:friends_arr]
    payees_arr << current_user.id

    paid_by_id = params[:expense][:paid_by_id]

    payees_arr.each do |payee_id|
      ExpenseGroup.create(expense_id: expense_id, split_with_id: payee_id, paid_by_id: paid_by_id)
    end

    # render json that shows 

  end



  private 

  def expense_params
    params.require(:expense).permit(:author_id, :category, :description, :amount, :notes)
  end

  # def friends_arr_params
  #   params[:friends_arr]
  # end

  # def paid_by_params 
  #  params[:paid_by_id]
  # end
end
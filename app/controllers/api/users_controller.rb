class Api::UsersController < ApplicationController


  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      # render "api/users/show"
      render "api/users/show.json.jbuilder"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
    render "api/users/index.json.jbuilder"
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show.json.jbuilder"
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end

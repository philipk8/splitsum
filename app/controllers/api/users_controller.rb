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
    render :index 
    # to be more explicit, can be excluded and by default will look for index filename
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end

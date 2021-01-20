class Api::SessionsController < ApplicationController

  # before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      # puts current_user.name
      # render "api/users/show"
      render "api/users/show.json.jbuilder"
      # render :show

    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      # puts current_user
      # render "api/users/show"
      render "api/users/show.json.jbuilder"
    else
      # render json: ["Nobody signed in"], status: 404
    end
  end
end

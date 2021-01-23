class Api::FriendsController < ApplicationController

  def create
    @friend = Friend.create!(friend_params)
    render 'api/friends/show.json.jbuilder'
    # creating a friendship / a relation ; this view just shows a relationship
  end
  
  def destroy
    @friend = Friend.find(
      params[:friend][:user_id],
      params[:friend][:friend_id]
    )
    @friend.destroy
    render 'api/friends/show.json.jbuilder'
    # more like destroying a friendship / a relationship between userid and friendid
  end
  
  def show
  end

  def index
  end


  private 

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
end
class Api::FriendsController < ApplicationController

  def create
    @friend = Friend.create!(friend_params)
    render 'api/friends/show.json.jbuilder'
    # creating a friendship / a relation ; this view just shows a relationship
  end
  
  def destroy
    @friend = Friend.find_by_ids(
      params[:friend][:user_id],
      params[:friend][:friend_id]
    )
    # debugger

    @friend.destroy
    render 'api/friends/show.json.jbuilder'
    # more like destroying a friendship / a relationship between userid and friendid
  end
  
  def show
    @friend = Friend.find_by_ids(params[:friend_id]
    )

    debugger 

    # @friend = friend_ar.as_json

    debugger



    render 'api/friends/show.json.jbuilder'

  end

  def index
    @user = User.find(params[:user_id])
    @friends = @user.friend_list
    # render :json
    # @friends = {}
    # @friends_arr.map{|friend| @friends[] = friend }
    render 'api/friends/index.json.jbuilder'
  end


  private 

  def friend_params
    params.require(:friend).permit(:user_id, :friend_id)
  end
  
end
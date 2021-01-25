class Api::FriendsController < ApplicationController

  def create
    @friend_relation = Friend.create!(friend_params)
    # @friend = Friend.new(friend_params)
    # @friend.user_id = params[:user_id]
    # @friend.save 
    # render 'api/friends/show.json.jbuilder'
    @friend = User.find(@friend_relation.friend_id)
# debugger
    render 'api/friends/show.json.jbuilder'
    # creating a friendship / a relation ; this view just shows a relationship
  end
  
  def destroy
    @friend_relation = Friend.find_by(user_id: params[:user_id], friend_id: params[:id])

    @friend_relation.destroy

    render 'api/friends/friend_relation.json.jbuilder'
    
    # more like destroying a friendship / a relationship between userid and friendid
  end
  
  def show
    friend_relation = Friend.find_by(user_id: params[:user_id], friend_id: params[:id])

    @friend = User.find_by(id: friend_relation.friend_id)

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
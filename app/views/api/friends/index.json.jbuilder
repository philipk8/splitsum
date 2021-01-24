

@friends.each do |friend|
  json.set! friend.id do
      # json.partial! "api/friends/friend", friend: friend
      json.name friend.name
      json.email friend.email
  end
end
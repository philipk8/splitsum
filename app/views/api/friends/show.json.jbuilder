

# json.partial! 'api/friends/friend', friend: @friend
# this is just one row, one relationship in the table

# json.set! @friend.id do 
#   json.name friend.name
#   json.email friend.email
# end

json.extract! @friend, :id, :name, :email
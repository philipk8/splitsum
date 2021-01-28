

json.extract! user, :id, :name, :email

json.you_owe user.you_owe
json.you_are_owed user.you_are_owed
json.total_balance user.total_balance

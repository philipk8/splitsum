# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  Friend.destroy_all 


  u1 = User.create!(name: 'demo_user', email: 'demo_user@email.com', password: '123456')
  u2 = User.create!(name: 'kate', email: 'kate@email.com', password: '123456')
  u3 = User.create!(name: 'michael', email: 'michael@email.com', password: '123456')
  u4 = User.create!(name: 'colin', email: 'colin@email.com', password: '123456')
  u5 = User.create!(name: 'pete', email: 'pete@email.com', password: '123456')
  u6 = User.create!(name: 'heidi', email: 'heidi@email.com', password: '123456')
  u7 = User.create!(name: 'aidy', email: 'aidy@email.com', password: '123456')
  u8 = User.create!(name: 'chloe', email: 'chloe@email.com', password: '123456')
  u9 = User.create!(name: 'kenan', email: 'kenan@email.com', password: '123456')
  u10 = User.create!(name: 'john', email: 'john@email.com', password: '123456')
  u11 = User.create!(name: 'alex', email: 'alex@email.com', password: '123456')
  u12 = User.create!(name: 'beck', email: 'beck@email.com', password: '123456')
  
  fs1 = Friend.create!(user_id: u1.id, friend_id: u2.id)
  fs2 = Friend.create!(user_id: u1.id, friend_id: u3.id)
  fs3 = Friend.create!(user_id: u2.id, friend_id: u1.id)
  fs4 = Friend.create!(user_id: u2.id, friend_id: u4.id)
  fs5 = Friend.create!(user_id: u3.id, friend_id: u1.id)
  fs6 = Friend.create!(user_id: u3.id, friend_id: u4.id)
  fs7 = Friend.create!(user_id: u4.id, friend_id: u1.id)
  fs8 = Friend.create!(user_id: u4.id, friend_id: u2.id)
  fs9 = Friend.create!(user_id: u1.id, friend_id: u8.id)
  fs10 = Friend.create!(user_id: u1.id, friend_id: u9.id)
  fs11 = Friend.create!(user_id: u2.id, friend_id: u12.id)
  fs12 = Friend.create!(user_id: u2.id, friend_id: u11.id)
  fs13 = Friend.create!(user_id: u3.id, friend_id: u8.id)
  fs14 = Friend.create!(user_id: u3.id, friend_id: u6.id)
  fs15 = Friend.create!(user_id: u4.id, friend_id: u11.id)
  fs16 = Friend.create!(user_id: u4.id, friend_id: u10.id)

  
  
  
  
end
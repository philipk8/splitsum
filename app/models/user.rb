class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token
    
    has_many :friendships,
    foreign_key: :user_id,
    class_name: :Friend

    has_many :expenses_authored,
    foreign_key: :author_id,
    class_name: :ExpenseDetail

    has_many :split_with_expenses,
    foreign_key: :split_with_id,
    class_name: :ExpenseGroup
    
    has_many :paid_expenses,
    foreign_key: :paid_by_id,
    class_name: :ExpenseGroup




    def friend_names

      friend_id_arr = self.friendships.pluck(:friend_id)

      # arr = []

      # friend_id_arr.each do |id|
      #   arr << User.where(id: id).pluck(:name)
      # end

      return User.find(friend_id_arr).pluck(:name)

    end

    def friend_list

      friend_id_arr = self.friendships.pluck(:friend_id)

      # arr = []

      # friend_id_arr.each do |id|
      #   arr << User.where(id: id).pluck(:name)
      # end
      return User.find(friend_id_arr)
      # finding the users by the friend_id
      # so i will get the persons id or friend.id back

    end

    

    # FIPA GERV

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.is_password?(password)
            return user
        else
            return nil
        end

    end

    def is_password?(password)
        bp = BCrypt::Password.new(self.password_digest)
        bp.is_password?(password)
    end


    def password=(password)
        @password = password
        bp = BCrypt::Password.create(password)
        self.password_digest = bp
    end


    def reset_session_token!
        self.update!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private 

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

end

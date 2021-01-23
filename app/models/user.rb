class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :friends,
      foreign_key: :friend_id,
      class_name: :Friend
    

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

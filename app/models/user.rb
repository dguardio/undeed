class User < ActiveRecord::Base
	# validates :email, :password_digest, :session_token, presence: true
	validates :email, :session_token, presence: true
	validates :email, :session_token, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: true }

	has_many(
 	:jobs,
 	class_name: "Job",
 	primary_key: :id,
 	foreign_key: :employer_id
 	)
	has_many(
  :myjobs,
  class_name: "Myjob",
  primary_key: :id,
  foreign_key: :seeker_id
  )

	after_initialize :ensure_session_token!
	attr_reader :password

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
		return nil unless user && user.is_password?(password)
		user
  end

	def self.find_or_create_by_auth_hash(auth_hash)
	  provider = auth_hash[:provider]
	  uid = auth_hash[:uid]
	  user = User.find_by(provider: provider, uid: uid)
	  return user if user

	  User.create(
	    provider: provider,
	    uid: uid,
	    email: auth_hash[:extra][:raw_info][:email]
	  )
	end

	def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

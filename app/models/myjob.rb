class Myjob < ActiveRecord::Base
	validates :status, :seeker_id, :job_id, presence: true

	belongs_to(
	:job,
	class_name: "Job",
	primary_key: :id,
	foreign_key: :job_id
	)

  belongs_to(
  :user,
  class_name: "User",
  primary_key: :id,
  foreign_key: :seeker_id
  )

	def self.forseeker(seeker_id)
		Myjob.where(seeker_id: seeker_id.to_i)
	end
end

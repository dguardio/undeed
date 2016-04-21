class Job < ActiveRecord::Base
	validates :title, :jobtype, :salary, :location, :description, :employer_id, :status, presence: true


	def self.todays_job(seeker_id)
		Job.where("created_at >= ?", Time.zone.now.beginning_of_day)
	end



	belongs_to(
		:employer,
		class_name: "User",
		primary_key: :id,
		foreign_key: :employer_id
	)
	belongs_to(
		:location,
		class_name: "Location",
		primary_key: :id,
		foreign_key: :location_id
	)
	has_many(
	  :seeker,
	  class_name: "User",
	  primary_key: :id,
	  foreign_key: :job_id
  )

	has_many(
	  :applications,
	  class_name: "Application",
	  primary_key: :id,
	  foreign_key: :job_id
  )
end

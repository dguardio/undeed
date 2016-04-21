class Application < ActiveRecord::Base

	has_attached_file :resume, default_url: "missing.pdf"
	validates_attachment_content_type :resume, :content_type => ['application/pdf']

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
    foreign_key: :user_id
  )
  has_one(
    :employer,
    through: :job,
    source: :employer
  )

	def self.find_app_for_employer(user_id)

		Application.joins(:employer).where('jobs.employer_id'=> user_id.to_i)
	end


	def self.find_app_for_job_seeker(user_id)
		Application.where(user_id: user_id.to_i)
	end
end

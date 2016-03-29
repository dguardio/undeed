class Job < ActiveRecord::Base
	validates :title, :jobtype, :salary, :location, :description, :employer_id, :status, presence: true

	belongs_to(
	:employer,
	class_name: "User",
	primary_key: :id,
	foreign_key: :employer_id
	)


end

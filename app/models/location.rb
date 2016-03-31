class Location < ActiveRecord::Base
	validates :city, presence: true

	has_many(
	:jobs,
	class_name: "Job",
	primary_key: :id,
	foreign_key: :location_id
	)


end

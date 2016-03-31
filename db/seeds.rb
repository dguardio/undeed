# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create(email: "zhuleijia@gmail.com", password: "53080949", real_name: "Lei Corp")
guest = User.create(email: "guest@guest.com", password: "guestguest")

new_york = Location.create(city: "New York")
new_port = Location.create(city: "New Port")

job1 = Job.create(
		title: "Engineer",
		jobtype:	"full_time",
		salary:	100000,
		location_id: 1,
		description: "Good Job",
		employer_id: 1,
		status: true
	)

job2 = Job.create(
		title: "Teacher",
		jobtype:	"full_time",
		salary:	900000,
		location_id: 1,
		description: "Damn Good Job",
		employer_id: 1,
		status: true
	)

job3 = Job.create(
		title: "Web Developer",
		jobtype:	"full_time",
		salary:	1100000,
		location_id: 1,
		description: "OMG Good Job",
		employer_id: 1,
		status: true
	)
	job4 = Job.create(
			title: "Software Engineer",
			jobtype:	"full_time",
			salary:	100000,
			location_id: 1,
			description: "OKay I guess",
			employer_id: 2,
			status: true
		)

	job5 = Job.create(
			title: "Hardware Engineer",
			jobtype:	"full_time",
			salary:	900000,
			location_id: 2,
			description: "Decent job",
			employer_id: 1,
			status: true
		)

	job6 = Job.create(
			title: "Principle Engineer",
			jobtype:	"full_time",
			salary:	1100000,
			location_id: 2,
			description: "Dreams",
			employer_id: 1,
			status: true
		)

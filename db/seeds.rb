# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create(email: "zhuleijia@gmail.com", password: "53080949", real_name: "Lei Corp")
guest = User.create(email: "guest@guest.com", password: "guestguest")

job1 = Job.create(
		title: "Engineer",
		jobtype:	"full_time",
		salary:	100000,
		location: "New York",
		description: "Good Job",
		employer_id: 1,
		status: true
	)

job2 = Job.create(
		title: "Teacher",
		jobtype:	"full_time",
		salary:	900000,
		location: "New York",
		description: "Damn Good Job",
		employer_id: 1,
		status: true
	)

job3 = Job.create(
		title: "Web Developer",
		jobtype:	"full_time",
		salary:	1100000,
		location: "New York",
		description: "OMG Good Job",
		employer_id: 1,
		status: true
	)

User.destroy_all
user1 = User.create(email: "zhuleijia@gmail.com", password: "53080949", real_name: "Lei Corp")
guest = User.create(email: "guest@guest.com", password: "guestguest", real_name:"guest")

Location.destroy_all
new_york = Location.create(city: "New York")
new_port = Location.create(city: "New Port")

Job.destroy_all
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

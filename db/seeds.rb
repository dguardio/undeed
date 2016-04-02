User.destroy_all
lei = User.create(email: "zhuleijia@gmail.com", password: "53080949", real_name: "Lei Corp")
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
	employer_id: 1,
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
job7 = Job.create(
	title: "Junior Engineer",
	jobtype:	"part_time",
	salary:	100000,
	location_id: 1,
	description: "Can't complain",
	employer_id: 1,
	status: true
)
job8 = Job.create(
	title: "Math Teacher",
	jobtype:	"full_time",
	salary:	900000,
	location_id: 1,
	description: "Damn Good Job",
	employer_id: 1,
	status: true
)
job9 = Job.create(
	title: "Full Stack Web Developer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: 1,
	description: "This is real",
	employer_id: 1,
	status: true
)
job10 = Job.create(
	title: "Hacky Software Engineer",
	jobtype:	"full_time",
	salary:	100000,
	location_id: 1,
	description: "OKay I guess",
	employer_id: 2,
	status: true
	)
job11 = Job.create(
	title: "Fat Hardware Engineer",
	jobtype:	"full_time",
	salary:	900000,
	location_id: 2,
	description: "Decent job",
	employer_id: 1,
	status: true
	)
job12 = Job.create(
	title: " Bossy Principle Engineer",
	jobtype:	"full_time",
	salary:	1100000,
	location_id: 2,
	description: "Dreams",
	employer_id: 1,
	status: true
	)
Myjob.destroy_all
guest_job1 = Myjob.create(job_id: 1, seeker_id: guest.id, status: "visited")
guest_job2 = Myjob.create(job_id: 2, seeker_id: guest.id, status: "archived")
guest_job3 = Myjob.create(job_id: 3, seeker_id: guest.id, status: "visited")
guest_job4 = Myjob.create(job_id: 4, seeker_id: guest.id, status: "visited")
guest_job5 = Myjob.create(job_id: 5, seeker_id: guest.id, status: "applied")
guest_job6 = Myjob.create(job_id: 6, seeker_id: guest.id, status: "applied")
guest_job7 = Myjob.create(job_id: 7, seeker_id: guest.id, status: "visited")
guest_job8 = Myjob.create(job_id: 8, seeker_id: guest.id, status: "archived")
guest_job9 = Myjob.create(job_id: 9, seeker_id: guest.id, status: "visited")
guest_job10 = Myjob.create(job_id: 10, seeker_id: guest.id, status: "visited")
guest_job11 = Myjob.create(job_id: 11, seeker_id: guest.id, status: "applied")
guest_job12 = Myjob.create(job_id: 12, seeker_id: guest.id, status: "applied")
lei_job2 = Myjob.create(job_id: 2, seeker_id: lei.id, status: "visited")
lei_job3 = Myjob.create(job_id: 3, seeker_id: lei.id, status: "visited")
lei_job4 = Myjob.create(job_id: 4, seeker_id: lei.id, status: "visited")
lei_job5 = Myjob.create(job_id: 5, seeker_id: lei.id, status: "visited")

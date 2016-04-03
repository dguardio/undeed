json.extract! myjob, :id, :status, :job_id, :seeker_id
# json.extract! employer, :email, :real_name
json.job do
	# json.job_id myjob.job.job_id
	json.title myjob.job.title
	json.location myjob.job.location.city
	json.employer myjob.job.employer.real_name
end

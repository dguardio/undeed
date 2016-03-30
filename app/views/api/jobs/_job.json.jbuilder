json.extract! job, :id, :title, :jobtype, :salary, :location, :description, :employer_id
# json.extract! employer, :email, :real_name
json.employer do
	json.name job.employer.real_name
	json.email job.employer.email
end

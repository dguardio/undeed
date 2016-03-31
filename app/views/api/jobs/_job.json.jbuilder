json.extract! job, :id, :title, :jobtype, :salary, :description
# json.extract! employer, :email, :real_name
json.employer do
	json.name job.employer.real_name
	json.email job.employer.email
end


json.location do
	json.city job.location.city
end

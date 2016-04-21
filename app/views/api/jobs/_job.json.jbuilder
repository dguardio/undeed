json.extract! job, :id, :title, :jobtype, :salary, :created_at, :updated_at, :employer_id
json.description h(job.description).gsub("\n","<br />").html_safe
# json.extract! employer, :email, :real_name
json.employer do
	json.name job.employer.real_name
	json.email job.employer.email
end


json.location do
	json.city job.location.city
end

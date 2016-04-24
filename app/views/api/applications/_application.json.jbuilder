json.extract! application,:id, :email, :real_name, :job_id, :cover_letter, :user_id, :updated_at
json.resume_url asset_path(application.resume.url)

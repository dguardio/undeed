json.extract! user, :email, :real_name, :phone_number
json.resume_url asset_path(user.resume.url)
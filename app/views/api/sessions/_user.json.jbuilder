json.extract! current_user, :id, :email, :real_name, :phone_number
json.resume_url asset_path(current_user.resume.url)

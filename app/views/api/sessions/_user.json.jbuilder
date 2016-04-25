json.extract! current_user, :id, :email, :real_name, :phone_number,:phone_number, :resume_file_name, :resume_content_type, :resume_file_size, :resume_updated_at
json.resume_url asset_path(current_user.resume.url)

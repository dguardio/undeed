class Api::ApplicationsController < ApplicationController
  def index
    @applications = Application.find_app_for_employer(current_user.id)

  end

  def create

    @application = Application.new(application_params)
    # debugger
    if params[:application][:resume_url]
      @application.resume = URI.parse(params[:application][:resume_url])
    end
    if @application.save
      render :show
    else
      render json: @application.errors.full_messages, status: 422
    end
  end

  def show
    @application = Application.find(params[:id])

  end

  def application_params
    params.require(:application).permit(:real_name, :email, :job_id, :cover_letter, :user_id, :resume)
  end
end

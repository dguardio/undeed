class Api::JobsController < ApplicationController
	def index
		@jobs = Job.all
	end


	def show
		@job = Job.find(params[:id])
	end

	def create
		@job = Job.new(job_params)
    if @job.save
      render :show
    else
      render json: {message: @job.errors.full_messages }, status: 401
    end
	end

  def job_params
    params.require(:job).permit(:title, :jobtype, :salary, :description, :employer_id, :location_id, :status)
  end
end

class Api::MyjobsController < ApplicationController
  def index
    @myjobs = Myjob.forseeker(params[:seeker_id])
        # debugger
  end

  def create
    # debugger
    @myjob = Myjob.new(myjob_params)

    if @myjob.save
      render :show
    else
      render json: @myjob.errors.full_messages, status: 422
    end
  end

  def show
    @myjob = Myjob.find(params[:id])

  end

  def update
    # debugger
    @myjob = Myjob.find(params[:id])
    @myjob.update(status: myjob_params[:status])
    render :show
  end

  def destroy
    @myjob = Myjob.find(params[:id])
    @myjob.destroy
    render :show
  end

  def myjob_params
    params.require(:myjob).permit(:status, :seeker_id, :job_id)
  end

end

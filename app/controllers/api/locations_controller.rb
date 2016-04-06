class Api::LocationsController < ApplicationController
  def index
    @locations = Location.all
  end

  def create

		@location = Location.new(location_params)
    if @location.save
      render :show
    else
      render json: {message: @location.errors.full_messages }, status: 401
    end
	end

  def show
    @location = Location.find(params[:id])
  end


  def location_params
    params.require(:location).permit(:city)
  end
end

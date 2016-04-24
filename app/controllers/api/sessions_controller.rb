class Api::SessionsController < ApplicationController
  def show
    if signed_in?
      # render json: current_user
      render :show
    else
      render json: {}, status: 200
    end
  end

  def create
    user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if user && user.is_password?(params[:password])
      sign_in(user)
      # render json: user
      render :show
    else
      render json: { message: "Invalid credentials" }, status: 401
    end
  end

  def destroy
    sign_out

    render json: {}
  end
end

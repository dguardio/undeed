class Api::UsersController < ApplicationController
	def new
    @user = User.new
  end

  def create
    # debugger;
    @user = User.new(user_params)
    # debugger;
    if @user.save
      sign_in(@user)
      render json: @user
    else
      render json: {message: @user.errors.full_messages }, status: 401
    end
  end


  def user_params
    params.permit(:email, :password, :real_name, :phone_number)
  end
end

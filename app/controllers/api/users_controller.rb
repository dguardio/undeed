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

	def update
		@user = current_user
		if @user.update(user_params)
			  render :show
    else
			render json: @user.errors.full_messages, status: :unprocessable_entity
		end
	end


	def show
		@user = User.find(params[:id])
		render :show
	end

  def user_params
    params.require(:user).permit(:email, :password, :real_name, :phone_number, :resume)
  end
end

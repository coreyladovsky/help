class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  def show
    @user = User.find(params[:id]);
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :zip_code, :birthday, :profile_pic)
  end

end

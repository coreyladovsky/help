class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['invalid credentials'], status: 404
    end
  end

  def destroy

    if current_user
      logout
      render json: {}
    else
      render json: ["Nobody logged in"]
    end
  end

end

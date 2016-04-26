class Api::SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in!(user)
      redirect_to posts_url
    else
      flash.now[:errors] = ["Invalid username/password"]
      render :new
    end
  end

  def destroy
    sign_out!
    redirect_to new_sessions_url
  end

  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      @errors = nil
      render 'api/shared/errors', status: 404
    end
  end
end

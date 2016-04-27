class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in!(@user)
      render 'api/users/show'
    else
       @errors = ["Invalid username/password"]
      render 'api/shared/errors', status: 404
    end
  end

  def destroy
    @user = current_user
    sign_out!
    render 'api/users/show'
  end

  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      # TODO: different status code for error
      @errors = nil
      render 'api/shared/errors', status: 404
    end
  end
end

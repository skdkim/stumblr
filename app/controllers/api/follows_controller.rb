class Api::PostsController < ApplicationController
  def create
    @current_user = params[:follower]
    follow = Follow.new(
      follower_id: params[:follower].id,
      followed_id: params[:followed].id
    )
    if follow.save
      render 'api/users/show'
    else
      render json: ["unsuccessful post"], status: 422
    end
  end

  def destroy

  end
end

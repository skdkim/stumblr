class Api::FollowersController < ApplicationController
  def create
    @follow = Follow.new(
      follower_id: follow_params[:follower_id],
      followed_id: follow_params[:followed_id]
    )
    if @follow.save
      render 'api/follows/show'
    else
      render json: ["unsuccessful follow request"], status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(
      follower_id: follow_params[:follower_id],
      followed_id: follow_params[:followed_id]
    )

    if @follow.destroy
      render 'api/follows/show'
    else
      @errors = @follow.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  private
  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end

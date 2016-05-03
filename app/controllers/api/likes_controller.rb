class Api::LikesController < ApplicationController
  def create
    @like = Like.new(
      user_id: current_user.id,
      post_id: likes_params[:post_id]
    )

    if @like.save
      render 'api/likes/show'
    else
      @errors = @like.errors.full_messages
      render 'api/shared/error', status: 422
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: current_user.id,
      post_id: likes_params[:post_id]
    )

    if @favorite.destroy
      render 'api/likes/show'
    else
      @errors = @like.errors.full_messages
      render 'api/shared/error', status: 422
  end

  private
  def likes_params
    params.require[:like].permit[:post_id]
  end
end

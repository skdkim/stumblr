class Api::PostsController < ApplicationController
  def new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.post_type == "video"
      @post.content_url.sub!('watch?v=', 'embed/')
    end

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index
    # TODO: if params[:searchInput].length > 0
    # TODO: filter by current user's followees
    @posts = Post.order('created_at DESC')
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :index
  end

  private
  def post_params
    params.require(:post).permit(:post_type, :title, :body, :content_url, :tags)
  end
end

class Api::PostsController < ApplicationController
  def new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    @post.body = simple_format(@post.body)

    if @post.post_type == "video"
      @post.content_url.sub!('watch?v=', 'embed/')
    end

    tags = params[:post][:tags]
    if tags
      tags.split!(",")
      tags.each do |tag|
        if Tag.find_by(tag: tag)
          tag_id = Tag.find_by(tag: tag).id
        else
          new_tag = Tag.create(tag: tag)
          tag_id = new_tag.id
        end
      end
    end

    ActiveRecord::Base.transaction do
      saved = @post.save
      Tagging.create(post_id: @post.id, tag_id: tag_id)
      if params[:post][:original_author]
        original_author = params[:post][:original_author]
        Note.create(
          author_id: original_author,
          noter_id: @post.author_id,
          post_id: @post.id,
          note_type: "reblog"
        )
      end
    end

    if saved
    # if @post.save
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
    params.require(:post).permit(:post_type, :title, :body, :content_url)
  end
end

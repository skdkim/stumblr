class Api::PostsController < ApplicationController
  def new
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id

    if @post.post_type == "video"
      @post.content_url.sub!('watch?v=', 'embed/')
    end

    tags = params[:post][:tags]
    saved = false

    ActiveRecord::Base.transaction do
      saved = @post.save
      if tags && tags.is_a?(Array)
        tags = tags.split(",").map(&:strip)
        tags.each do |tag|
          if Tag.find_by(tag: tag)
            tag_id = Tag.find_by(tag: tag).id
            Tagging.create(post_id: @post.id, tag_id: tag_id)
          else
            new_tag = Tag.create(tag: tag)
            tag_id = new_tag.id
            Tagging.create(post_id: @post.id, tag_id: tag_id)
          end
        end
      end

      # fail
      if params[:post][:original_author]
        original_author = params[:post][:original_author]
        Note.create(
          author_id: original_author[:id],
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
      render json: ["unsuccessful post"], status: 422
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
    # TODO: pass "explore" as param
    # TODO: if params[:searchInput].length > 0
    # TODO: filter by current user's followees
    # if params[:searchInput]
    #   # @posts = Post.includes(:tags, :notes).where()
    # elsif params[:explore]
    #   @posts = Post.includes(:tags, :notes).order('created_at DESC')
    # else
    #   # @posts = Post.includes(:tags, :notes).where().order('created_at DESC')
    # end

    @posts = Post.order('created_at DESC')
  end

  def show
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  private
  def post_params
    params.require(:post).permit(:post_type, :title, :body, :content_url)
  end
end

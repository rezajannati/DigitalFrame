class SlideshowsController < ApplicationController
  def index
    @slideshows = current_user.slideshows.all
  end

  def new
    @pictures = current_user.pictures.all
    @slideshow = current_user.slideshows.new
  end

  def create
    if current_user.slideshows.create(slideshow_params)
        flash[:notice] = "new slideshow successfully created"

        redirect_to slideshows_path
      else
        render :text => "something went wrong :("
      end
  end

  def update
  end

  def destroy
  end

  def edit
  end

  def show
    @slideshow = Slideshow.find(params[:id])
  end

  private 
  def slideshow_params
    params.require(:picture).permit(:name, {:picture_ids => []})
  end
  
end
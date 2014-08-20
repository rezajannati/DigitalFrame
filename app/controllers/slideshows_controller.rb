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

      redirect_to user_slideshows_path current_user
    else
      render :text => "something went wrong :("
    end
  end

  def update
    if current_user.slideshows.find(params[:id]).update(slideshow_params)
      flash[:notice] = "slideshow successfully updated"
      redirect_to user_slideshows_path current_user
    else
      render :text => "something went wrong :("
    end
  end

  def destroy
    Slideshow.find(params[:id]).destroy
    flash[:notice] = 'Slideshow successfully deleted'
    redirect_to user_slideshows_path current_user
    else
  end

  def edit
    @slideshow = Slideshow.find(params[:id])
    @pictures = current_user.pictures.all - @slideshow.pictures
  end

  def show
    @slideshow = Slideshow.find(params[:id])
  end

  private 
  def slideshow_params
    params.require(:picture).permit(:name, {:picture_ids => []}, :interval)
  end

end

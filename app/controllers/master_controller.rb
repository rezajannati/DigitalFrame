class MasterController < ApplicationController
  def index
    @user = current_user
  end

  def camera
  end

  def pictures
    @picture = Picture.all
    @pic = Picture.new()

  end

  def create
    @picture = Picture.new picture_params
    if @picture.save

      redirect_to '/pictures'

    else
      render :text => 'something went wrong!'
    end
  end

  #this can go pretty soon
  def slideshows
    @pictures = current_user.pictures.all
    @slideshow = current_user.slideshows.new  
  end

  def slideshowcreate
      if current_user.slideshows.create(slideshow_params)
        flash[:notice] = "new slideshow successfully created"

        redirect_to '/master'
      else
        render :text => "something went wrong :("
      end
  end
  #  end

  def layouts
  end

  def settings
  end
  
  private 
  def slideshow_params
    params.require(:picture).permit(:name, {:picture_ids => []})
  end

  def picture_params
    params.require(:picture).permit(:user_id, :avatar)
  end

end

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

  def slideshows
  end

  def layouts
  end

  def settings
  end
  
  private 

  
  def picture_params
    params.require(:picture).permit(:user_id, :avatar)
  end

end

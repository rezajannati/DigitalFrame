class SlaveController < ApplicationController
  def index
  	@user = current_user
  	@slideshows = current_user.slideshows
  end
 
  def play
  	@user = current_user
  	@slideshow = Slideshow.find(params[:id])
  end

  def all
  	@pictures = current_user.pictures
    puts @pictures
  end

end

class PicturesController < ApplicationController
  def new
  end

  def index
    @pictures = current_user.pictures.all
    @picture = current_user.pictures.new
  end

  def create
    params[:images].each do |img|
      User.find(params[:user_id]).pictures.create(:avatar => img[:avatar])
    end
    # @picture = User.find(params[:user_id]).pictures.new(picture_params)
    # if @picture.save
    redirect_to user_pictures_path current_user
    # else
    #   render :text => 'something went wrong!'
    # end
  end

  def destroy
  end

  def show
  end

  def picture_params
    params.permit(:avatar, :name, {:images => []})
  end
end

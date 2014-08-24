class PicturesController < ApplicationController
  def new
  end

  def index
    @pictures = current_user.pictures.all
    @picture = current_user.pictures.new
  end

  def create
    if params[:images].nil? 
      flash[:notice] = "Error: Please select a picture to upload!"
      redirect_to user_pictures_path current_user
    else
      params[:images].each do |img|
        User.find(params[:user_id]).pictures.create(:avatar => img[:avatar])
      end

      redirect_to user_pictures_path current_user
    end
  end

  def destroy
    params[:delete_ids].each do |id|
      Picture.find(id).destroy
    end
    redirect_to user_pictures_path current_user
  end

  def show
  end

  def picture_params
    params.permit(:avatar, :name, {:images => []})
  end
end

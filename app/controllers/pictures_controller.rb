class PicturesController < ApplicationController
  def new
  end

  def index
    @pictures = current_user.pictures.all
    @picture = current_user.pictures.new
  end

  def create
<<<<<<< HEAD
    if params[:images].nil? 
      flash[:notice] = "Error: Please select a picture to upload!"
      redirect_to user_pictures_path current_user
    else
      params[:images].each do |img|
        User.find(params[:user_id]).pictures.create(:avatar => img[:avatar])
      end
=======
    #render :text => params.inspect
    if !params[:images].nil? 
      params[:images].each do |img|
        User.find(params[:user_id]).pictures.create(:avatar => img[:avatar])
      end
      flash[:message] = "Successfully added #{params[:images].length} photos!"
      redirect_to user_pictures_path current_user
    else
      flash[:errors] = 'Please include at least one image'
>>>>>>> 3416db429ecf3e8c9e6bc345fc6e870601931ab1
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

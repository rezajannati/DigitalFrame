class PicturesController < ApplicationController
  def new
  end

  def index
    @pictures = current_user.pictures.all
    @picture = current_user.pictures.new
  end

  def create 
    # render :text => params.inspect
    if !params[:images].nil? 
      count = 0
      params[:images].each do |img|
        # iOS upload bug fix
        temp = img[:avatar].original_filename.split('.')
        if  temp[0] == 'image'
          img[:avatar].original_filename = "iOS" + Time.now.to_i.to_s + "number" + count.to_s + "user" + current_user.id.to_s 
          count += 1
        end  
      # render :text => params[:images].inspect
      User.find(params[:user_id]).pictures.create(:avatar => img[:avatar])
     end  #loop
      flash[:message] = "Successfully added #{params[:images].length} photos!"
      redirect_to user_pictures_path current_user
    else
      flash[:errors] = 'Please include at least one image'
      redirect_to user_pictures_path current_user
    end
  end  #fn

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

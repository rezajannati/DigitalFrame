class Picture < ActiveRecord::Base
	belongs_to :user
	mount_uploader :avatar, AvatarUploader
	has_many :slideshows, through: :slideshowpictures
  	has_many :slideshowpictures
end

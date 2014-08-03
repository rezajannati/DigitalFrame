class Slideshow < ActiveRecord::Base
  belongs_to :user
  has_many :pictures, through: :slideshowpictures
  has_many :slideshowpictures
  

end

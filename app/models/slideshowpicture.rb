class Slideshowpicture < ActiveRecord::Base
  belongs_to :slideshow
  belongs_to :picture
end

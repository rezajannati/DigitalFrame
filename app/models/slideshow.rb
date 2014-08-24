class Slideshow < ActiveRecord::Base
  belongs_to :user
  has_many :pictures, through: :slideshowpictures
  has_many :slideshowpictures
<<<<<<< HEAD
  

=======
>>>>>>> 3416db429ecf3e8c9e6bc345fc6e870601931ab1
end

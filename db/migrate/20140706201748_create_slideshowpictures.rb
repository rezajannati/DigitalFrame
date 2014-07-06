class CreateSlideshowpictures < ActiveRecord::Migration
  def change
    create_table :slideshowpictures do |t|
      t.references :picture, index: true
      t.references :slideshow, index: true

      t.timestamps
    end
  end
end

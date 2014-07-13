class CreateSlideshows < ActiveRecord::Migration
  def change
    create_table :slideshows do |t|
      t.references :user, index: true
      t.string :name
      t.timestamps
    end
  end
end

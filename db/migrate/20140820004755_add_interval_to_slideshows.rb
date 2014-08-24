class AddIntervalToSlideshows < ActiveRecord::Migration
  def change
    add_column :slideshows, :interval, :integer, :default => 3
  end
end

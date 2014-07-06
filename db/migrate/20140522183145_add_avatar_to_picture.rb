class AddAvatarToPicture < ActiveRecord::Migration
  def change
    add_column :pictures, :Avatar, :string
  end
end

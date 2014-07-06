class LowercaseAvatar < ActiveRecord::Migration
  def change
  	rename_column :pictures, :Avatar, :avatar
  end
end

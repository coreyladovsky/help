class Businesses < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :profile_pic
  end
end

class AddFeatures < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :rating, :integer
    add_column :businesses, :price_range, :integer
    add_column :businesses, :delivery, :boolean
    add_column :businesses, :noise_level, :integer
  end
end

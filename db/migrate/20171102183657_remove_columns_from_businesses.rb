class RemoveColumnsFromBusinesses < ActiveRecord::Migration[5.1]
  def change
    remove_column :businesses, :rating
    remove_column :businesses, :review_count
    remove_column :businesses, :price_range
    remove_column :businesses, :delivery
    remove_column :businesses, :noise_level
  end
end

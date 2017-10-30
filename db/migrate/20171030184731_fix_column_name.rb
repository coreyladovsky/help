class FixColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :businesses, :rating_count, :review_count
  end
end

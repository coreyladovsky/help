class AddColumnToBusinesses < ActiveRecord::Migration[5.1]
  def change
    add_column :businesses, :rating_count, :integer
  end
end

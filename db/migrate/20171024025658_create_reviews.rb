class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.integer :rating, null: false
      t.integer :price_range
      t.text :body, null: false
      t.boolean :delivery
      t.integer :noise_level
      t.timestamps
    end
  end
end

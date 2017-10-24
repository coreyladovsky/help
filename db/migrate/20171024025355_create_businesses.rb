class CreateBusinesses < ActiveRecord::Migration[5.1]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :phone_number, null: false
      t.string :profile_pic, null: false
      t.string :cuisine, null: false
      t.string :website
      t.integer :mon_start_time
      t.integer :mon_end_time
      t.integer :tue_start_time
      t.integer :tue_end_time
      t.integer :wed_start_time
      t.integer :wed_end_time
      t.integer :thur_start_time
      t.integer :thur_end_time
      t.integer :fri_start_time
      t.integer :fri_end_time
      t.integer :sat_start_time
      t.integer :sat_end_time
      t.integer :sun_start_time
      t.integer :sun_end_time

      t.timestamps
    end
  end
end

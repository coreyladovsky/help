# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171101221825) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "address", null: false
    t.string "phone_number", null: false
    t.string "cuisine", null: false
    t.string "website"
    t.integer "mon_start_time"
    t.integer "mon_end_time"
    t.integer "tue_start_time"
    t.integer "tue_end_time"
    t.integer "wed_start_time"
    t.integer "wed_end_time"
    t.integer "thur_start_time"
    t.integer "thur_end_time"
    t.integer "fri_start_time"
    t.integer "fri_end_time"
    t.integer "sat_start_time"
    t.integer "sat_end_time"
    t.integer "sun_start_time"
    t.integer "sun_end_time"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.integer "rating"
    t.integer "price_range"
    t.boolean "delivery"
    t.integer "noise_level"
    t.integer "review_count"
    t.float "lat"
    t.float "lng"
  end

  create_table "photos", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.integer "rating", null: false
    t.integer "price_range"
    t.text "body", null: false
    t.boolean "delivery"
    t.integer "noise_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "zip_code", null: false
    t.date "birthday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
  end

end

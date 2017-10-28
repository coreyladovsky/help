# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Business.create(name: "Hamburger Chilli", address: "701 Flatbush Ave
Brooklyn, NY 11225", phone_number: "(718) 333-5099", cuisine: "american",
image: File.open("app/assets/images/business_images/american.jpg"),
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create(name: "Pickings & Parry", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 473-9555", cuisine: "american",
image: File.open("app/assets/images/business_images/american2.jpg"))

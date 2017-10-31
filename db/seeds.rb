User.destroy_all

guest = User.create!(first_name: "Guest", last_name: "Guest",
  email: "Guest", zip_code:"11211", password: "password", image: File.open("app/assets/images/default.jpg"))

corey = User.create!(first_name: "corey", last_name: "sky",
  email: "coreyskymusic@gmail.com", zip_code:"11211", password: "starwars")

max = User.create!(first_name: "max", last_name: "Currier",
  email: "BandB@gmail.com", zip_code:"11207", password: "starwars")

yama = User.create!(first_name: "yama", last_name: "cat",
  email: "yama", zip_code:"11211", password: "starwars")

duck= User.create!(first_name: "duck", last_name: "goose",
  email: "fairytales@gmail.com", zip_code:"11211", password: "starwars")

noe = User.create!(first_name: "noe", last_name: "j",
  email: "orangeboy@gmail.com", zip_code:"11211", password: "starwars")


Review.destroy_all

Review.create!(user_id: corey.id, business_id: 1, body: "This place really knows what's going on",
 rating:4, price_range:1, noise_level:4, delivery: false )

Review.create!(user_id: max.id, business_id: 1, body: "Bad food, good prices",
 rating:3, price_range:1, noise_level:4, delivery: false )

Review.create!(user_id: yama.id, business_id: 1, body: "Moms food is better",
 rating:1, price_range:2, noise_level:3, delivery: true )

Review.create!(user_id: yama.id, business_id: 2, body: "I'm tired of eating here",
 rating:2, price_range:1, noise_level:2, delivery: false )

Review.create!(user_id: noe.id, business_id: 2, body: "My favorite place to go on Sundays",
 rating:5, price_range:3, noise_level:1, delivery: false )

Review.create!(user_id: noe.id, business_id: 3, body: "This places Rocks!",
 rating:5, price_range:4, noise_level:1, delivery: false )

Review.create!(user_id: duck.id, business_id: 4, body: "I always get the duck!",
 rating:4, price_range:3, noise_level:1, delivery: false )

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
Business.destroy_all

Business.create!(name: "Hamburger Chilli", address: "701 Flatbush Ave
Brooklyn, NY 11225", phone_number: "(718) 333-5099", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Pickings & Parry", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 473-9555", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Mullied", address: "276 Bay Ridge Ave
Brooklyn, NY 11220", phone_number: "(541) 231-6160", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar.jpg",
mon_start_time: 16, mon_end_time: 24, tue_start_time: 16, tue_end_time: 24, wed_start_time: 16,
wed_end_time: 24, thur_start_time: 16, thur_end_time: 24, fri_start_time: 16, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Old Town Bar", address: "39 W 19th St
New York, NY 10011", phone_number: "(646) 833-7532", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar2.jpg",
mon_start_time: 15.3, mon_end_time: 24, tue_start_time: 15.3, tue_end_time: 24, wed_start_time: 15.3,
wed_end_time: 26, thur_start_time: 15.3, thur_end_time: 26, fri_start_time: 15.3, fri_end_time: 26,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26)

Business.create!(name: "Central Cafe", address: "95 1st Ave
New York, NY 10003", phone_number: "(646) 791-5400", cuisine: "Cafe",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/cafe.jpg",
mon_start_time: 15, mon_end_time: 22, tue_start_time: 15, tue_end_time: 22, wed_start_time: 15,
wed_end_time: 22, thur_start_time: 15, thur_end_time: 22, fri_start_time: 15, fri_end_time: 22,
sat_start_time: 13, sat_end_time:22, sun_start_time: 13, sun_end_time: 22)

Business.create!(name: "Pings", address: "407 Smith St
Brooklyn, NY 11231", phone_number: "(347) 689-3075", cuisine: "Chinese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/chinese.jpg",
mon_start_time: 16, mon_end_time: 28, tue_start_time: 16, tue_end_time: 28, wed_start_time: 16,
wed_end_time: 28, thur_start_time: 16, thur_end_time: 28, fri_start_time: 16, fri_end_time: 28,
sat_start_time: 13, sat_end_time:28, sun_start_time: 13, sun_end_time: 28)

Business.create!(name: "Coughing Coffee", address: "9 Pell St
New York, NY 10013", phone_number: "(212) 233-8888", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffe.jpg",
mon_start_time: 6, mon_end_time: 18.15, tue_start_time: 6, tue_end_time: 18.15, wed_start_time: 6,
wed_end_time: 18.15, thur_start_time: 6, thur_end_time: 18.15, fri_start_time: 6, fri_end_time: 18.15,
sat_start_time: 7.15, sat_end_time:18.15, sun_start_time: 7.15, sun_end_time: 18.15)

Business.create!(name: "The Frenchie", address: "244 Smith St
Brooklyn, NY 11231", phone_number: "(347) 204-2545", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Starbucks", address: "509 Amsterdam Ave
New York, NY 10024", phone_number: "(212) 470-5566", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee3.jpg",
mon_start_time: 5, mon_end_time: 17, tue_start_time: 5, tue_end_time: 17, wed_start_time: 5,
wed_end_time: 17, thur_start_time: 5, thur_end_time: 17, fri_start_time: 5, fri_end_time: 17,
sat_start_time: 6, sat_end_time:17, sun_start_time: 6, sun_end_time: 17)

Business.create!(name: "Irish Coffee", address: "22 W 8th St
New York, NY 10011", phone_number: "(212) 533-2962", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee4.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3)

Business.create!(name: "Sea Dog", address: "1 Doyers St
New York, NY 10013", phone_number: "(212) 791-1817", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee5.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3)

Business.create!(name: "The Deli", address: "100 W Houston St
New York, NY 10012", phone_number: "(212) 254-7000", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Carnigie", address: "488 Carroll St
Brooklyn, NY 11215", phone_number: "(718) 855-1941", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Circos", address: "509 Myrtle Ave
Brooklyn, NY 11205", phone_number: "(718) 783-1936", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Cake", address: "424 E 9th St
New York, NY 10009", phone_number: "(646) 755-8088", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Truffles", address: "5 E 19th St
New York, NY 10003", phone_number: "(212) 802-9999", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert3.jpg",
mon_start_time: 14, mon_end_time: 24, tue_start_time: 14, tue_end_time: 24, wed_start_time: 14,
wed_end_time: 24, thur_start_time: 14, thur_end_time: 24, fri_start_time: 14, fri_end_time: 24,
sat_start_time: 14, sat_end_time:24, sun_start_time: 14, sun_end_time: 24)

Business.create!(name: "Queens Diner", address: "200 E 3rd St
New York, NY 10009", phone_number: "(646) 682-7080", cuisine: "Diner",
image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/Diner.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "Grocer", address: "82 Reade St
New York, NY 10007", phone_number: "(212) 267-3000", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner2.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "All Night", address: "37-11 30th Ave
Astoria, NY 11103", phone_number: "(718) 606-1900", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner3.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "Upside Down", address: "65 4th Ave
New York, NY 10003", phone_number: "(212) 388-0088", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner4.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "Kitchen", address: "199 Grand St
New York, NY 10013", phone_number: "(212) 334-3669", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner6.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "Rock", address: "1046 Flatbush Ave
Brooklyn, NY 11226", phone_number: "(347) 350-6152", cuisine: "Fast Food",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/fastfood.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24)

Business.create!(name: "Hershonies", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 414-4104", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0)

Business.create!(name: "Pretty Near Perfect", address: "403 W 43rd St
New York, NY 10036", phone_number: "(212) 602-1910", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 15, sun_end_time: 22)

Business.create!(name: "Hop Stork", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 510-8550", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french4.jpg",
mon_start_time: 15, mon_end_time: 23.3, tue_start_time: 15, tue_end_time: 23.3, wed_start_time: 15,
wed_end_time: 23.3, thur_start_time: 15, thur_end_time: 23.3, fri_start_time: 15, fri_end_time: 23.3,
sat_start_time: 13, sat_end_time:23.3, sun_start_time: 13, sun_end_time: 23.3)

Business.create!(name: "Market Cafe", address: "139 Chrystie St
New York, NY 10002", phone_number: "(212) 925-8815", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Tomatos", address: "647 9th Ave
New York, NY 10036", phone_number: "(212) 245-8880", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french6.jpg",
mon_start_time: 17, mon_end_time: 24, tue_start_time: 17, tue_end_time: 24, wed_start_time: 17,
wed_end_time: 24, thur_start_time: 17, thur_end_time: 24, fri_start_time: 17, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Teaster Hempernistal", address: "47 W 8th St
New York, NY 10011", phone_number: "(347) 475-1513", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 0, tue_end_time: 0, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0)

Business.create!(name: "Bigdalia Amore Mia", address: "75 9th Ave
New York, NY 10011", phone_number: "(212) 989-6699", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Panales", address: "1411 2nd Ave
New York, NY 10021", phone_number: "(212) 256-1188", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Arigato", address: "68 Clinton St
New York, NY 10002", phone_number: "(347) 704-2398", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese1.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Samuri Moma", address: "307 W 47th St
New York, NY 10036", phone_number: "(646) 918-6923", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Desde", address: "34-20 Broadway
Astoria, NY 11106", phone_number: "(917) 745-0407", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26)

Business.create!(name: "Buzz", address: "956 2nd Ave
New York, NY 10022", phone_number: "(212) 644-2700", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 25, thur_start_time: 15, thur_end_time: 25, fri_start_time: 15, fri_end_time: 25,
sat_start_time: 13, sat_end_time:25, sun_start_time: 13, sun_end_time: 25)

Business.create!(name: "Love Of Pizza", address: "415 Tompkins Ave
Brooklyn, NY 11216", phone_number: "(718) 483-9111", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza4.jpg",
mon_start_time: 10, mon_end_time: 24, tue_start_time: 10, tue_end_time: 24, wed_start_time: 10,
wed_end_time: 24, thur_start_time: 10, thur_end_time: 24, fri_start_time: 10, fri_end_time: 24,
sat_start_time: 10, sat_end_time:24, sun_start_time: 10, sun_end_time: 24)

Business.create!(name: "Sharkteeth", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 650-3900", cuisine: "Seafood",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/seafood.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Carolina", address: "155 5th Ave
Brooklyn, NY 11217", phone_number: "(760) 231-6025", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:25.15, sun_start_time: 13, sun_end_time: 25.15)

Business.create!(name: "Ed's", address: "110 Waverly Pl
New York, NY 10011", phone_number: "(212) 777-0303", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "The Workroom", address: "34 W 35th St
New York, NY 10001", phone_number: "(212) 564-4430", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Magna Carta", address: "454 Van Brunt St
Brooklyn, NY 11231", phone_number: "(347) 294-4644", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create!(name: "Steak House 88", address: "766 9th Ave
New York, NY 10019", phone_number: "(212) 581-0999", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse6.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)


Business.create!(name: "Think Coffe", address: "1415 Second Ave
New York, NY 10021", phone_number: "(347) 894-5909", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/thinkcoffee.jpg",
mon_start_time: 4, mon_end_time: 21, tue_start_time: 4, tue_end_time: 21, wed_start_time: 4,
wed_end_time: 21, thur_start_time: 4, thur_end_time: 21, fri_start_time: 4, fri_end_time: 21,
sat_start_time: 13, sat_end_time:21, sun_start_time: 13, sun_end_time: 21)



User.destroy_all

User.create!(first_name: "Guest", last_name: "Guest", password: "password", zip_code: "11211", email: "guest@guest.com")






































#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#
#












#
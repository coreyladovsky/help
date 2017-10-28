# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Business.create(name: "Hamburger Chilli", address: "701 Flatbush Ave
Brooklyn, NY 11225", phone_number: "(718) 333-5099", cuisine: "American",
image: File.open("app/assets/images/business_images/american.jpg"),
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24)

Business.create(name: "Pickings & Parry", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 473-9555", cuisine: "American",
image: File.open("app/assets/images/business_images/american2.jpg"))

Business.create(name: "Mullied", address: "276 Bay Ridge Ave
Brooklyn, NY 11220", phone_number: "(541) 231-6160", cuisine: "Bar",
image: File.open("app/assets/images/business_images/bar.jpg"))

Business.create(name: "Old Town Bar", address: "39 W 19th St
New York, NY 10011", phone_number: "(646) 833-7532", cuisine: "Bar",
image: File.open("app/assets/images/business_images/bar.jpg"))

Business.create(name: "Central Cafe", address: "95 1st Ave
New York, NY 10003", phone_number: "(646) 791-5400", cuisine: "Cafe",
image: File.open("app/assets/images/business_images/cafe.jpg"))

Business.create(name: "Pings", address: "407 Smith St
Brooklyn, NY 11231", phone_number: "(347) 689-3075", cuisine: "Chinese",
image: File.open("app/assets/images/business_images/chinese.jpg"))

Business.create(name: "Coughing Coffee", address: "9 Pell St
New York, NY 10013", phone_number: "(212) 233-8888", cuisine: "Coffee",
image: File.open("app/assets/images/business_images/coffee.jpg"))

Business.create(name: "The Frenchie", address: "244 Smith St
Brooklyn, NY 11231", phone_number: "(347) 204-2545", cuisine: "Coffee",
image: File.open("app/assets/images/business_images/coffee2.jpg"))

Business.create(name: "Starbucks", address: "509 Amsterdam Ave
New York, NY 10024", phone_number: "(212) 470-5566", cuisine: "Coffee",
image: File.open("app/assets/images/business_images/coffee3.jpg"))

Business.create(name: "Irish Coffee", address: "22 W 8th St
New York, NY 10011", phone_number: "(212) 533-2962", cuisine: "Coffee",
image: File.open("app/assets/images/business_images/coffee4.jpg"))

Business.create(name: "Sea Dog", address: "1 Doyers St
New York, NY 10013", phone_number: "(212) 791-1817", cuisine: "Coffee",
image: File.open("app/assets/images/business_images/coffee5.jpg"))

Business.create(name: "The Deli", address: "100 W Houston St
New York, NY 10012", phone_number: "(212) 254-7000", cuisine: "Delicatessen",
image: File.open("app/assets/images/business_images/delicatessen.jpg"))

Business.create(name: "Carnigie", address: "488 Carroll St
Brooklyn, NY 11215", phone_number: "(718) 855-1941", cuisine: "Delicatessen",
image: File.open("app/assets/images/business_images/delicatessen2.jpg"))

Business.create(name: "Circos", address: "509 Myrtle Ave
Brooklyn, NY 11205", phone_number: "(718) 783-1936", cuisine: "Dessert",
image: File.open("app/assets/images/business_images/dessert.jpg"))

Business.create(name: "Cake", address: "424 E 9th St
New York, NY 10009", phone_number: "(646) 755-8088", cuisine: "Dessert",
image: File.open("app/assets/images/business_images/dessert2.jpg"))

Business.create(name: "Truffles", address: "5 E 19th St
New York, NY 10003", phone_number: "(212) 802-9999", cuisine: "Dessert",
image: File.open("app/assets/images/business_images/dessert3.jpg"))

Business.create(name: "Queens Diner", address: "200 E 3rd St
New York, NY 10009", phone_number: "(646) 682-7080", cuisine: "Diner",
image: File.open("app/assets/images/business_images/Diner.jpg"))

Business.create(name: "Grocer", address: "82 Reade St
New York, NY 10007", phone_number: "(212) 267-3000", cuisine: "Diner",
image: File.open("app/assets/images/business_images/diner2.jpg"))

usiness.create(name: "All Night", address: "37-11 30th Ave
Astoria, NY 11103", phone_number: "(718) 606-1900", cuisine: "Diner",
image: File.open("app/assets/images/business_images/diner3.jpg"))

Business.create(name: "Upside Down", address: "65 4th Ave
New York, NY 10003", phone_number: "(212) 388-0088", cuisine: "Diner",
image: File.open("app/assets/images/business_images/diner4.jpg"))

Business.create(name: "Kitchen", address: "199 Grand St
New York, NY 10013", phone_number: "(212) 334-3669", cuisine: "Diner",
image: File.open("app/assets/images/business_images/diner6.jpg"))

Business.create(name: "Rock", address: "1046 Flatbush Ave
Brooklyn, NY 11226", phone_number: "(347) 350-6152", cuisine: "Fast Food",
image: File.open("app/assets/images/business_images/fastfood.jpg"))

Business.create(name: "Hershonies", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 414-4104", cuisine: "French",
image: File.open("app/assets/images/business_images/french.jpg"))

Business.create(name: "Pretty Near Perfect", address: "403 W 43rd St
New York, NY 10036", phone_number: "(212) 602-1910", cuisine: "French",
image: File.open("app/assets/images/business_images/french2.jpg"))

Business.create(name: "Hop Stork", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 510-8550", cuisine: "French",
image: File.open("app/assets/images/business_images/french4.jpg"))

Business.create(name: "Market Cafe", address: "139 Chrystie St
New York, NY 10002", phone_number: "(212) 925-8815", cuisine: "French",
image: File.open("app/assets/images/business_images/french5.jpg"))

Business.create(name: "Tomatos", address: "647 9th Ave
New York, NY 10036", phone_number: "(212) 245-8880", cuisine: "French",
image: File.open("app/assets/images/business_images/french6.jpg"))

Business.create(name: "Teaster Hempernistal", address: "47 W 8th St
New York, NY 10011", phone_number: "(347) 475-1513", cuisine: "Italian",
image: File.open("app/assets/images/business_images/italian.jpg"))

Business.create(name: "Bigdalia Amore Mia", address: "75 9th Ave
New York, NY 10011", phone_number: "(212) 989-6699", cuisine: "Italian",
image: File.open("app/assets/images/business_images/italian2.jpg"))

Business.create(name: "Panales", address: "1411 2nd Ave
New York, NY 10021", phone_number: "(212) 256-1188", cuisine: "Italian",
image: File.open("app/assets/images/business_images/italian3.jpg"))

Business.create(name: "Arigato", address: "68 Clinton St
New York, NY 10002", phone_number: "(347) 704-2398", cuisine: "Japanese",
image: File.open("app/assets/images/business_images/japanese1.jpg"))

Business.create(name: "Samuri Moma", address: "307 W 47th St
New York, NY 10036", phone_number: "(646) 918-6923", cuisine: "Japanese",
image: File.open("app/assets/images/business_images/japanese3.jpg"))

Business.create(name: "Desde", address: "34-20 Broadway
Astoria, NY 11106", phone_number: "(917) 745-0407", cuisine: "Pizza",
image: File.open("app/assets/images/business_images/pizza.jpg"))

Business.create(name: "Buzz", address: "956 2nd Ave
New York, NY 10022", phone_number: "(212) 644-2700", cuisine: "Pizza",
image: File.open("app/assets/images/business_images/pizza2.jpg"))

Business.create(name: "Love Of Pizza", address: "415 Tompkins Ave
Brooklyn, NY 11216", phone_number: "(718) 483-9111", cuisine: "Pizza",
image: File.open("app/assets/images/business_images/pizza4.jpg"))

Business.create(name: "Sharkteeth", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 650-3900", cuisine: "Seafood",
image: File.open("app/assets/images/business_images/seafood.jpg"))

Business.create(name: "Carolina", address: "155 5th Ave
Brooklyn, NY 11217", phone_number: "(760) 231-6025", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/steakhouse.jpg"))

Business.create(name: "Ed's", address: "110 Waverly Pl
New York, NY 10011", phone_number: "(212) 777-0303", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/steakhouse2.jpg"))

Business.create(name: "The Workroom", address: "34 W 35th St
New York, NY 10001", phone_number: "(212) 564-4430", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/steakhouse3.jpg"))

Business.create(name: "Magna Carta", address: "454 Van Brunt St
Brooklyn, NY 11231", phone_number: "(347) 294-4644", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/steakhouse5.jpg"))

Business.create(name: "Steak House 88", address: "766 9th Ave
New York, NY 10019", phone_number: "(212) 581-0999", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/steakhouse6.jpg"))


Business.create(name: "Think Coffe", address: "1415 Second Ave
New York, NY 10021", phone_number: "(347) 894-5909", cuisine: "Steakhouse",
image: File.open("app/assets/images/business_images/thinkcoffee.jpg"))















































































#

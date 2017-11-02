Business.destroy_all

biz1 = Business.create!(name: "Hamburger Chilli", address: "701 Flatbush Ave
Brooklyn, NY 11225", phone_number: "(718) 333-5099", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6560593, lng: -73.9597273 )

biz2 = Business.create!(name: "Pickings & Parry", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 473-9555", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24,lat: 40.7033991, lng: -73.9914091)

biz3 = Business.create!(name: "Mullied", address: "276 Bay Ridge Ave
Brooklyn, NY 11220", phone_number: "(541) 231-6160", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar.jpg",
mon_start_time: 16, mon_end_time: 24, tue_start_time: 16, tue_end_time: 24, wed_start_time: 16,
wed_end_time: 24, thur_start_time: 16, thur_end_time: 24, fri_start_time: 16, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.63574029999999, lng:-74.0264851)

biz4 = Business.create!(name: "Old Town Bar", address: "39 W 19th St
New York, NY 10011", phone_number: "(646) 833-7532", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar2.jpg",
mon_start_time: 15.3, mon_end_time: 24, tue_start_time: 15.3, tue_end_time: 24, wed_start_time: 15.3,
wed_end_time: 26, thur_start_time: 15.3, thur_end_time: 26, fri_start_time: 15.3, fri_end_time: 26,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26, lat:40.740156, lng:-73.99336599999998)

biz5 = Business.create!(name: "Central Cafe", address: "95 1st Ave
New York, NY 10003", phone_number: "(646) 791-5400", cuisine: "Cafe",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/cafe.jpg",
mon_start_time: 15, mon_end_time: 22, tue_start_time: 15, tue_end_time: 22, wed_start_time: 15,
wed_end_time: 22, thur_start_time: 15, thur_end_time: 22, fri_start_time: 15, fri_end_time: 22,
sat_start_time: 13, sat_end_time:22, sun_start_time: 13, sun_end_time: 22, lat:40.740156, lng:-73.99336599999998)

biz6 = Business.create!(name: "Pings", address: "407 Smith St
Brooklyn, NY 11231", phone_number: "(347) 689-3075", cuisine: "Chinese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/chinese.jpg",
mon_start_time: 16, mon_end_time: 28, tue_start_time: 16, tue_end_time: 28, wed_start_time: 16,
wed_end_time: 28, thur_start_time: 16, thur_end_time: 28, fri_start_time: 16, fri_end_time: 28,
sat_start_time: 13, sat_end_time:28, sun_start_time: 13, sun_end_time: 28, lat: 40.6778892, lng:-73.99606799999998)

biz7 = Business.create!(name: "Coughing Coffee", address: "9 Pell St
New York, NY 10013", phone_number: "(212) 233-8888", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffe.jpg",
mon_start_time: 6, mon_end_time: 18.15, tue_start_time: 6, tue_end_time: 18.15, wed_start_time: 6,
wed_end_time: 18.15, thur_start_time: 6, thur_end_time: 18.15, fri_start_time: 6, fri_end_time: 18.15,
sat_start_time: 7.15, sat_end_time:18.15, sun_start_time: 7.15, sun_end_time: 18.15, lat: 40.7146052, lng:-73.99778420000001)

biz8 = Business.create!(name: "The Frenchie", address: "244 Smith St
Brooklyn, NY 11231", phone_number: "(347) 204-2545", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6834507, lng:-73.99285499999996)

biz9 = Business.create!(name: "Starbucks", address: "509 Amsterdam Ave
New York, NY 10024", phone_number: "(212) 470-5566", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee3.jpg",
mon_start_time: 5, mon_end_time: 17, tue_start_time: 5, tue_end_time: 17, wed_start_time: 5,
wed_end_time: 17, thur_start_time: 5, thur_end_time: 17, fri_start_time: 5, fri_end_time: 17,
sat_start_time: 6, sat_end_time:17, sun_start_time: 6, sun_end_time: 17, lat: 40.7866273, lng:-73.97553590000001)

Business.create!(name: "Irish Coffee", address: "22 W 8th St
New York, NY 10011", phone_number: "(212) 533-2962", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee4.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3, lat:40.7326287, lng:-73.9976676)

Business.create!(name: "Sea Dog", address: "1 Doyers St
New York, NY 10013", phone_number: "(212) 791-1817", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee5.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3, lat: 40.7142049, lng:-73.99789149999998)

Business.create!(name: "The Deli", address: "100 W Houston St
New York, NY 10012", phone_number: "(212) 254-7000", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7273702, lng: -74.00025140000002)

Business.create!(name: "Carnigie", address: "488 Carroll St
Brooklyn, NY 11215", phone_number: "(718) 855-1941", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6768407, lng: -73.9860721)

Business.create!(name: "Circos", address: "509 Myrtle Ave
Brooklyn, NY 11205", phone_number: "(718) 783-1936", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.693846, lng:-73.96451300000001)

Business.create!(name: "Cake", address: "424 E 9th St
New York, NY 10009", phone_number: "(646) 755-8088", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7275663, lng: -73.9838054)

Business.create!(name: "Truffles", address: "5 E 19th St
New York, NY 10003", phone_number: "(212) 802-9999", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert3.jpg",
mon_start_time: 14, mon_end_time: 24, tue_start_time: 14, tue_end_time: 24, wed_start_time: 14,
wed_end_time: 24, thur_start_time: 14, thur_end_time: 24, fri_start_time: 14, fri_end_time: 24,
sat_start_time: 14, sat_end_time:24, sun_start_time: 14, sun_end_time: 24, lat: 40.7390081, lng: -73.99066370000003)

Business.create!(name: "Queens Diner", address: "200 E 3rd St
New York, NY 10009", phone_number: "(646) 682-7080", cuisine: "Diner",
image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/Diner.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7226894, lng: -73.98330229999999)

Business.create!(name: "Grocer", address: "82 Reade St
New York, NY 10007", phone_number: "(212) 267-3000", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner2.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7154939, lng: -74.0071795)

Business.create!(name: "All Night", address: "37-11 30th Ave
Astoria, NY 11103", phone_number: "(718) 606-1900", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner3.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7646022, lng: -73.91595089999998)

Business.create!(name: "Upside Down", address: "65 4th Ave
New York, NY 10003", phone_number: "(212) 388-0088", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner4.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.719002, lng:-73.99702660000003)

Business.create!(name: "Kitchen", address: "199 Grand St
New York, NY 10013", phone_number: "(212) 334-3669", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner6.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.719002, lng:-73.99702660000003)

Business.create!(name: "Rock", address: "1046 Flatbush Ave
Brooklyn, NY 11226", phone_number: "(347) 350-6152", cuisine: "Fast Food",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/fastfood.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.6455068, lng: -73.95833870000001)

Business.create!(name: "Hershonies", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 414-4104", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0, lat: 40.74765439999999, lng: -74.00352480000004)

Business.create!(name: "Pretty Near Perfect", address: "403 W 43rd St
New York, NY 10036", phone_number: "(212) 602-1910", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 15, sun_end_time: 22, lat: 40.7594102, lng: -73.992455)

Business.create!(name: "Hop Stork", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 510-8550", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french4.jpg",
mon_start_time: 15, mon_end_time: 23.3, tue_start_time: 15, tue_end_time: 23.3, wed_start_time: 15,
wed_end_time: 23.3, thur_start_time: 15, thur_end_time: 23.3, fri_start_time: 15, fri_end_time: 23.3,
sat_start_time: 13, sat_end_time:23.3, sun_start_time: 13, sun_end_time: 23.3, lat: 40.74765439999999, lng: -74.00352480000004)

Business.create!(name: "Market Cafe", address: "139 Chrystie St
New York, NY 10002", phone_number: "(212) 925-8815", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat:40.7197427, lng: -73.99336190000002 )

Business.create!(name: "Tomatos", address: "647 9th Ave
New York, NY 10036", phone_number: "(212) 245-8880", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french6.jpg",
mon_start_time: 17, mon_end_time: 24, tue_start_time: 17, tue_end_time: 24, wed_start_time: 17,
wed_end_time: 24, thur_start_time: 17, thur_end_time: 24, fri_start_time: 17, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.76064849999999, lng: -73.99132850000001)

Business.create!(name: "Teaster Hempernistal", address: "47 W 8th St
New York, NY 10011", phone_number: "(347) 475-1513", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 0, tue_end_time: 0, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0, lat: 40.7333363, lng: -73.99849119999999)

Business.create!(name: "Bigdalia Amore Mia", address: "75 9th Ave
New York, NY 10011", phone_number: "(212) 989-6699", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat:40.7419634, lng: -74.0049148 )

Business.create!(name: "Panales", address: "1411 2nd Ave
New York, NY 10021", phone_number: "(212) 256-1188", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7699636, lng: -73.9579134)

Business.create!(name: "Arigato", address: "68 Clinton St
New York, NY 10002", phone_number: "(347) 704-2398", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese1.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.719249, lng: -73.98473790000003 )

Business.create!(name: "Samuri Moma", address: "307 W 47th St
New York, NY 10036", phone_number: "(646) 918-6923", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7608159, lng: -73.98784649999999)

Business.create!(name: "Desde", address: "34-20 Broadway
Astoria, NY 11106", phone_number: "(917) 745-0407", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26, lat: 40.7603716, lng: -73.92243209999998 )

Business.create!(name: "Buzz", address: "956 2nd Ave
New York, NY 10022", phone_number: "(212) 644-2700", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 25, thur_start_time: 15, thur_end_time: 25, fri_start_time: 15, fri_end_time: 25,
sat_start_time: 13, sat_end_time:25, sun_start_time: 13, sun_end_time: 25, lat: 40.755165, lng: -73.96786800000001)

Business.create!(name: "Love Of Pizza", address: "415 Tompkins Ave
Brooklyn, NY 11216", phone_number: "(718) 483-9111", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza4.jpg",
mon_start_time: 10, mon_end_time: 24, tue_start_time: 10, tue_end_time: 24, wed_start_time: 10,
wed_end_time: 24, thur_start_time: 10, thur_end_time: 24, fri_start_time: 10, fri_end_time: 24,
sat_start_time: 10, sat_end_time:24, sun_start_time: 10, sun_end_time: 24, lat: 40.6833532, lng: -73.94391339999999)

Business.create!(name: "Sharkteeth", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 650-3900", cuisine: "Seafood",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/seafood.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7033991, lng: -73.9914091)

Business.create!(name: "Carolina", address: "155 5th Ave
Brooklyn, NY 11217", phone_number: "(760) 231-6025", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:25.15, sun_start_time: 13, sun_end_time: 25.15, lat: 40.6778753, lng: -73.97920110000001)

Business.create!(name: "Ed's", address: "110 Waverly Pl
New York, NY 10011", phone_number: "(212) 777-0303", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7323204, lng: -73.9992651)

Business.create!(name: "The Workroom", address: "34 W 35th St
New York, NY 10001", phone_number: "(212) 564-4430", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7496525, lng: -73.98581050000001)

Business.create!(name: "Magna Carta", address: "454 Van Brunt St
Brooklyn, NY 11231", phone_number: "(347) 294-4644", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6749246, lng: -74.0161622 )

Business.create!(name: "Steak House 88", address: "766 9th Ave
New York, NY 10019", phone_number: "(212) 581-0999", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse6.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7642211, lng: -73.98804610000002)


Business.create!(name: "Think Coffe", address: "1415 Second Ave
New York, NY 10021", phone_number: "(347) 894-5909", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/thinkcoffee.jpg",
mon_start_time: 4, mon_end_time: 21, tue_start_time: 4, tue_end_time: 21, wed_start_time: 4,
wed_end_time: 21, thur_start_time: 4, thur_end_time: 21, fri_start_time: 4, fri_end_time: 21,
sat_start_time: 13, sat_end_time:21, sun_start_time: 13, sun_end_time: 21, lat: 40.7700264, lng: -73.95777550000003)

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

Review.create!(user_id: corey.id, business_id: biz1.id, body: "This place really knows what's going on",
 rating:4, price_range:1, noise_level:4, delivery: false )

Review.create!(user_id: max.id, business_id: biz1.id, body: "Bad food, good prices",
 rating:3, price_range:1, noise_level:4, delivery: false )

Review.create!(user_id: yama.id, business_id: biz1.id, body: "Moms food is better",
 rating:1, price_range:2, noise_level:3, delivery: true )

Review.create!(user_id: yama.id, business_id: biz2.id, body: "I'm tired of eating here",
 rating:2, price_range:1, noise_level:2, delivery: false )

Review.create!(user_id: noe.id, business_id: biz2.id, body: "My favorite place to go on Sundays",
 rating:5, price_range:3, noise_level:1, delivery: false )

Review.create!(user_id: noe.id, business_id: biz3.id, body: "This places Rocks!",
 rating:5, price_range:4, noise_level:1, delivery: false )

Review.create!(user_id: duck.id, business_id: biz4.id, body: "I always get the duck!",
 rating:4, price_range:3, noise_level:1, delivery: false )

 Review.create!(user_id: corey.id, business_id: biz5.id, body: "This place really knows what's going on",
  rating:4, price_range:1, noise_level:4, delivery: false )

 Review.create!(user_id: max.id, business_id: biz6.id, body: "Bad food, good prices",
  rating:3, price_range:1, noise_level:4, delivery: false )

 Review.create!(user_id: yama.id, business_id: biz6.id, body: "Moms food is better",
  rating:1, price_range:2, noise_level:3, delivery: true )

  Review.create!(user_id: corey.id, business_id: biz7.id, body: "This place really knows what's going on",
   rating:4, price_range:1, noise_level:4, delivery: false )

  Review.create!(user_id: max.id, business_id: biz7.id, body: "Bad food, good prices",
   rating:3, price_range:1, noise_level:4, delivery: false )

  Review.create!(user_id: yama.id, business_id: biz7.id, body: "Moms food is better",
   rating:1, price_range:2, noise_level:3, delivery: true )

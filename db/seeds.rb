Business.destroy_all

biz1 = Business.create!(name: "Hamburger Chilli", address: "701 Flatbush Ave
Brooklyn, NY 11225", phone_number: "(718) 333-5099", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6560593, lng: -73.9597273, website: "www.hammy-chilli.com")

biz2 = Business.create!(name: "Pickings & Parry", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 473-9555", cuisine: "American",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/american2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24,lat: 40.7033991, lng: -73.9914091, website: "www.pickingsandparry.com")

biz3 = Business.create!(name: "Mullied", address: "276 Bay Ridge Ave
Brooklyn, NY 11220", phone_number: "(541) 231-6160", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar.jpg",
mon_start_time: 16, mon_end_time: 24, tue_start_time: 16, tue_end_time: 24, wed_start_time: 16,
wed_end_time: 24, thur_start_time: 16, thur_end_time: 24, fri_start_time: 16, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.63574029999999, lng:-74.0264851, website: "www.mullied.com")

biz4 = Business.create!(name: "Old Town Bar", address: "39 W 19th St
New York, NY 10011", phone_number: "(646) 833-7532", cuisine: "Bar",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/bar2.jpg",
mon_start_time: 15.3, mon_end_time: 24, tue_start_time: 15.3, tue_end_time: 24, wed_start_time: 15.3,
wed_end_time: 26, thur_start_time: 15.3, thur_end_time: 26, fri_start_time: 15.3, fri_end_time: 26,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26, lat:40.740156, lng:-73.99336599999998, website: "www.oldtownbar.com")

biz5 = Business.create!(name: "Central Cafe", address: "95 1st Ave
New York, NY 10003", phone_number: "(646) 791-5400", cuisine: "Cafe",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/cafe.jpg",
mon_start_time: 15, mon_end_time: 22, tue_start_time: 15, tue_end_time: 22, wed_start_time: 15,
wed_end_time: 22, thur_start_time: 15, thur_end_time: 22, fri_start_time: 15, fri_end_time: 22,
sat_start_time: 13, sat_end_time:22, sun_start_time: 13, sun_end_time: 22, lat:40.740156, lng:-73.99336599999998, website: "www.centralcafe.com")

biz6 = Business.create!(name: "Pings", address: "407 Smith St
Brooklyn, NY 11231", phone_number: "(347) 689-3075", cuisine: "Chinese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/chinese.jpg",
mon_start_time: 16, mon_end_time: 28, tue_start_time: 16, tue_end_time: 28, wed_start_time: 16,
wed_end_time: 28, thur_start_time: 16, thur_end_time: 28, fri_start_time: 16, fri_end_time: 28,
sat_start_time: 13, sat_end_time:28, sun_start_time: 13, sun_end_time: 28, lat: 40.6778892, lng:-73.99606799999998, website: "www.pings.com")

biz7 = Business.create!(name: "Coughing Coffee", address: "9 Pell St
New York, NY 10013", phone_number: "(212) 233-8888", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffe.jpg",
mon_start_time: 6, mon_end_time: 18.15, tue_start_time: 6, tue_end_time: 18.15, wed_start_time: 6,
wed_end_time: 18.15, thur_start_time: 6, thur_end_time: 18.15, fri_start_time: 6, fri_end_time: 18.15,
sat_start_time: 7.15, sat_end_time:18.15, sun_start_time: 7.15, sun_end_time: 18.15, lat: 40.7146052, lng:-73.99778420000001, website: "www.coughing-coffe.com")

biz8 = Business.create!(name: "The Frenchie", address: "244 Smith St
Brooklyn, NY 11231", phone_number: "(347) 204-2545", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6834507, lng:-73.99285499999996, website: "www.the-frenchie.com")

biz9 = Business.create!(name: "Starbucks", address: "509 Amsterdam Ave
New York, NY 10024", phone_number: "(212) 470-5566", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee3.jpg",
mon_start_time: 5, mon_end_time: 17, tue_start_time: 5, tue_end_time: 17, wed_start_time: 5,
wed_end_time: 17, thur_start_time: 5, thur_end_time: 17, fri_start_time: 5, fri_end_time: 17,
sat_start_time: 6, sat_end_time:17, sun_start_time: 6, sun_end_time: 17, lat: 40.7866273, lng:-73.97553590000001, website: "www.starbucks.com")

biz10 = Business.create!(name: "Irish Coffee", address: "22 W 8th St
New York, NY 10011", phone_number: "(212) 533-2962", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee4.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3, lat:40.7326287, lng:-73.9976676, website: "www.irish-coffe.com")

biz11 = Business.create!(name: "Sea Dog", address: "1 Doyers St
New York, NY 10013", phone_number: "(212) 791-1817", cuisine: "Coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/coffee5.jpg",
mon_start_time: 7, mon_end_time: 19.3, tue_start_time: 7, tue_end_time: 19.3, wed_start_time: 7,
wed_end_time: 19.3, thur_start_time: 7, thur_end_time: 19.3, fri_start_time: 7, fri_end_time: 19.3,
sat_start_time: 13, sat_end_time:19.3, sun_start_time: 13, sun_end_time: 19.3, lat: 40.7142049, lng:-73.99789149999998, website: "www.sea-dog.com")

Business.create!(name: "The Deli", address: "100 W Houston St
New York, NY 10012", phone_number: "(212) 254-7000", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7273702, lng: -74.00025140000002, website: "www.thedeli.com")

biz12 = Business.create!(name: "Carnigie", address: "488 Carroll St
Brooklyn, NY 11215", phone_number: "(718) 855-1941", cuisine: "Delicatessen",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/delicatessen2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6768407, lng: -73.9860721, website: "www.cargigie.com")

biz13 = Business.create!(name: "Circos", address: "509 Myrtle Ave
Brooklyn, NY 11205", phone_number: "(718) 783-1936", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.693846, lng:-73.96451300000001, website: "www.Circos.com")

biz14 = Business.create!(name: "Cake", address: "424 E 9th St
New York, NY 10009", phone_number: "(646) 755-8088", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7275663, lng: -73.9838054, website: "www.Cake.club")

biz15 = Business.create!(name: "Truffles", address: "5 E 19th St
New York, NY 10003", phone_number: "(212) 802-9999", cuisine: "Dessert",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/dessert3.jpg",
mon_start_time: 14, mon_end_time: 24, tue_start_time: 14, tue_end_time: 24, wed_start_time: 14,
wed_end_time: 24, thur_start_time: 14, thur_end_time: 24, fri_start_time: 14, fri_end_time: 24,
sat_start_time: 14, sat_end_time:24, sun_start_time: 14, sun_end_time: 24, lat: 40.7390081, lng: -73.99066370000003, website: "www.truffles.com")

biz16 = Business.create!(name: "Queens Diner", address: "200 E 3rd St
New York, NY 10009", phone_number: "(646) 682-7080", cuisine: "Diner",
image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/Diner.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7226894, lng: -73.98330229999999, website: "www.Queens-Diner.com")

biz17 = Business.create!(name: "Grocer", address: "82 Reade St
New York, NY 10007", phone_number: "(212) 267-3000", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner2.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7154939, lng: -74.0071795, website: "www.Grocer.com")

biz18 = Business.create!(name: "All Night", address: "37-11 30th Ave
Astoria, NY 11103", phone_number: "(718) 606-1900", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner3.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.7646022, lng: -73.91595089999998, website: "www.All-Night.com" )

biz19 = Business.create!(name: "Upside Down", address: "65 4th Ave
New York, NY 10003", phone_number: "(212) 388-0088", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner4.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.719002, lng:-73.99702660000003, website: "www.UpsideDown.com")

biz20 = Business.create!(name: "Kitchen", address: "199 Grand St
New York, NY 10013", phone_number: "(212) 334-3669", cuisine: "Diner",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/diner6.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.719002, lng:-73.99702660000003, website: "www.Kitchen.me")

biz21 = Business.create!(name: "Rock", address: "1046 Flatbush Ave
Brooklyn, NY 11226", phone_number: "(347) 350-6152", cuisine: "Fast Food",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/fastfood.jpg",
mon_start_time: 0, mon_end_time: 24, tue_start_time: 0, tue_end_time: 24, wed_start_time: 0,
wed_end_time: 24, thur_start_time: 0, thur_end_time: 24, fri_start_time: 0, fri_end_time: 24,
sat_start_time: 0, sat_end_time:24, sun_start_time: 0, sun_end_time: 24, lat: 40.6455068, lng: -73.95833870000001, website: "www.Rock.net")

biz22 = Business.create!(name: "Hershonies", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 414-4104", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0, lat: 40.74765439999999, lng: -74.00352480000004, website: "www.Hershonies.com")

biz23 = Business.create!(name: "Pretty Near Perfect", address: "403 W 43rd St
New York, NY 10036", phone_number: "(212) 602-1910", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 15, sun_end_time: 22, lat: 40.7594102, lng: -73.992455)

biz24 = Business.create!(name: "Hop Stork", address: "461 W 23rd St
New York, NY 10011", phone_number: "(212) 510-8550", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french4.jpg",
mon_start_time: 15, mon_end_time: 23.3, tue_start_time: 15, tue_end_time: 23.3, wed_start_time: 15,
wed_end_time: 23.3, thur_start_time: 15, thur_end_time: 23.3, fri_start_time: 15, fri_end_time: 23.3,
sat_start_time: 13, sat_end_time:23.3, sun_start_time: 13, sun_end_time: 23.3, lat: 40.74765439999999, lng: -74.00352480000004, website: "www.HopStork.com")

biz25 = Business.create!(name: "Market Cafe", address: "139 Chrystie St
New York, NY 10002", phone_number: "(212) 925-8815", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat:40.7197427, lng: -73.99336190000002, website: "www.Market-Cafe.com" )

biz26 = Business.create!(name: "Tomatos", address: "647 9th Ave
New York, NY 10036", phone_number: "(212) 245-8880", cuisine: "French",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/french6.jpg",
mon_start_time: 17, mon_end_time: 24, tue_start_time: 17, tue_end_time: 24, wed_start_time: 17,
wed_end_time: 24, thur_start_time: 17, thur_end_time: 24, fri_start_time: 17, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.76064849999999, lng: -73.99132850000001, website: "www.Tomatos.net")

biz27 = Business.create!(name: "Teaster Hempernistal", address: "47 W 8th St
New York, NY 10011", phone_number: "(347) 475-1513", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 0, tue_end_time: 0, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 0, sun_end_time: 0, lat: 40.7333363, lng: -73.99849119999999, website: "www.T-Hemp.com")

biz28 = Business.create!(name: "Bigdalia Amore Mia", address: "75 9th Ave
New York, NY 10011", phone_number: "(212) 989-6699", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat:40.7419634, lng: -74.0049148, website: "www.Bigdalia.com" )

biz29 = Business.create!(name: "Panales", address: "1411 2nd Ave
New York, NY 10021", phone_number: "(212) 256-1188", cuisine: "Italian",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/italian3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7699636, lng: -73.9579134, website: "www.Panales.com")

biz30 = Business.create!(name: "Arigato", address: "68 Clinton St
New York, NY 10002", phone_number: "(347) 704-2398", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese1.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.719249, lng: -73.98473790000003, website: "www.Arigato.com" )

biz31 = Business.create!(name: "Samuri Moma", address: "307 W 47th St
New York, NY 10036", phone_number: "(646) 918-6923", cuisine: "Japanese",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/japanese3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7608159, lng: -73.98784649999999, website: "www.Samuri-Moma.com")

biz32 = Business.create!(name: "Desde", address: "34-20 Broadway
Astoria, NY 11106", phone_number: "(917) 745-0407", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:26, sun_start_time: 13, sun_end_time: 26, lat: 40.7603716, lng: -73.92243209999998, website: "www.Desde.com" )

biz33 = Business.create!(name: "Buzz", address: "956 2nd Ave
New York, NY 10022", phone_number: "(212) 644-2700", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 25, thur_start_time: 15, thur_end_time: 25, fri_start_time: 15, fri_end_time: 25,
sat_start_time: 13, sat_end_time:25, sun_start_time: 13, sun_end_time: 25, lat: 40.755165, lng: -73.96786800000001, website: "www.Buzz.club")

biz34 = Business.create!(name: "Love Of Pizza", address: "415 Tompkins Ave
Brooklyn, NY 11216", phone_number: "(718) 483-9111", cuisine: "Pizza",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/pizza4.jpg",
mon_start_time: 10, mon_end_time: 24, tue_start_time: 10, tue_end_time: 24, wed_start_time: 10,
wed_end_time: 24, thur_start_time: 10, thur_end_time: 24, fri_start_time: 10, fri_end_time: 24,
sat_start_time: 10, sat_end_time:24, sun_start_time: 10, sun_end_time: 24, lat: 40.6833532, lng: -73.94391339999999, website: "www.LoveOfPizzacom")

biz35 = Business.create!(name: "Sharkteeth", address: "55 Water St
Brooklyn, NY 11201", phone_number: "(718) 650-3900", cuisine: "Seafood",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/seafood.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7033991, lng: -73.9914091, website: "www.Sharkteeth.com")

biz36 = Business.create!(name: "Carolina", address: "155 5th Ave
Brooklyn, NY 11217", phone_number: "(760) 231-6025", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:25.15, sun_start_time: 13, sun_end_time: 25.15, lat: 40.6778753, lng: -73.97920110000001, website: "www.Caolina.com")

biz37 = Business.create!(name: "Ed's", address: "110 Waverly Pl
New York, NY 10011", phone_number: "(212) 777-0303", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse2.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7323204, lng: -73.9992651, website: "www.Edsteak.com")

biz38 = Business.create!(name: "The Workroom", address: "34 W 35th St
New York, NY 10001", phone_number: "(212) 564-4430", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse3.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7496525, lng: -73.98581050000001, website: "www.The-Workroom.com")

biz39 = Business.create!(name: "Magna Carta", address: "454 Van Brunt St
Brooklyn, NY 11231", phone_number: "(347) 294-4644", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse5.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.6749246, lng: -74.0161622, website: "www.MagnaCarta.com" )

biz40 = Business.create!(name: "Steak House 88", address: "766 9th Ave
New York, NY 10019", phone_number: "(212) 581-0999", cuisine: "Steakhouse",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/steakhouse6.jpg",
mon_start_time: 15, mon_end_time: 24, tue_start_time: 15, tue_end_time: 24, wed_start_time: 15,
wed_end_time: 24, thur_start_time: 15, thur_end_time: 24, fri_start_time: 15, fri_end_time: 24,
sat_start_time: 13, sat_end_time:24, sun_start_time: 13, sun_end_time: 24, lat: 40.7642211, lng: -73.98804610000002, website: "www.SH88.com")


biz41 = Business.create!(name: "Think Coffee", address: "1415 Second Ave
New York, NY 10021", phone_number: "(347) 894-5909", cuisine: "coffee",
image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-photos/thinkcoffee.jpg",
mon_start_time: 4, mon_end_time: 21, tue_start_time: 4, tue_end_time: 21, wed_start_time: 4,
wed_end_time: 21, thur_start_time: 4, thur_end_time: 21, fri_start_time: 4, fri_end_time: 21,
sat_start_time: 13, sat_end_time:21, sun_start_time: 13, sun_end_time: 21, lat: 40.7700264, lng: -73.95777550000003, website: "www.Think-Coffe.com")

User.destroy_all

guest = User.create!(first_name: "Guest", last_name: "Guest",
  email: "Guest", zip_code:"11211", password: "password", image: File.open("app/assets/images/default.jpg"))

corey = User.create!(first_name: "Corey", last_name: "Sky",
  email: "coreyskymusic@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/ayo-ogunseinde-93181.jpg")

max = User.create!(first_name: "Max", last_name: "Currier",
  email: "BandB@gmail.com", zip_code:"11207", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/brian-fraser-337137.jpg")

yama = User.create!(first_name: "Yama", last_name: "Cat",
  email: "yama", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/brooke-cagle-224815.jpg")

duck= User.create!(first_name: "Duck", last_name: "Goose",
  email: "fairytales@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/christopher-campbell-28567.jpg")

noe = User.create!(first_name: "Noe", last_name: "J",
  email: "orangeboy@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/ciocan-ciprian-324091.jpg")

ellis = User.create!(first_name: "Ellis", last_name: "Kelly",
  email: "zoo@gmail.com", zip_code:"10237", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/els-fattah-371118.jpg")

eric = User.create!(first_name: "Eric", last_name: "Norton",
  email: "blueboy@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/eric-froehling-311481.jpg")

e = User.create!(first_name: "E", last_name: "J",
  email: "hungry@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/erik-lucatero-310633.jpg")

ilya = User.create!(first_name: "Ilya", last_name: "Wykomb",
  email: "icouldfly@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/ilya-yakover-268547.jpg")

janka = User.create!(first_name: "Janka", last_name: "Williams",
  email: "hotcity@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/janko-ferlic-337879.jpg")

jared = User.create!(first_name: "Jared", last_name: "Ken",
  email: "jarjarken@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/jared-sluyter-260692.jpg")

jeremy = User.create!(first_name: "Jeremy", last_name: "Bishop",
  email: "knightandbishops@gmail.com", zip_code:"11211", password: "starwars", image: "https://s3.amazonaws.com/helpcoreyladovskyprojectdev/users/images/000/000/001/original/jeremy-bishop-140086.jpg")

Photo.destroy_all

Photo.create!(user_id: corey.id, business_id: biz1.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/american.jpg")
Photo.create!(user_id: max.id, business_id: biz1.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/american2.jpg")
Photo.create!(user_id: yama.id, business_id: biz2.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/american3.jpg")
Photo.create!(user_id: noe.id, business_id: biz2.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/american4.jpg")
Photo.create!(user_id: ilya.id, business_id: biz3.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/bar1.jpg")
Photo.create!(user_id: duck.id, business_id: biz3.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/bar2.jpg")
Photo.create!(user_id: e.id, business_id: biz4.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/bar3.jpg")
Photo.create!(user_id: eric.id, business_id: biz4.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/bar4.jpg")
Photo.create!(user_id: janka.id, business_id: biz5.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/cafe1.jpg")
Photo.create!(user_id: jared.id, business_id: biz5.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/cafe2.jpg")
Photo.create!(user_id: ellis.id, business_id: biz6.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/chinese1.jpg")
Photo.create!(user_id: jeremy.id, business_id: biz6.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/chinese2.jpg")

Photo.create!(user_id: corey.id, business_id: biz7.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee1.jpg")
Photo.create!(user_id: max.id, business_id: biz7.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee10.jpg")
Photo.create!(user_id: yama.id, business_id: biz8.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee11.jpg")
Photo.create!(user_id: noe.id, business_id: biz8.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee13.jpg")
Photo.create!(user_id: ilya.id, business_id: biz9.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee14.jpg")
Photo.create!(user_id: duck.id, business_id: biz9.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee15.jpg")
Photo.create!(user_id: e.id, business_id: biz10.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee16.jpg")
Photo.create!(user_id: eric.id, business_id: biz10.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee17.jpg")
Photo.create!(user_id: janka.id, business_id: biz11.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee19.jpg")
Photo.create!(user_id: jared.id, business_id: biz11.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee2.jpg")
Photo.create!(user_id: ellis.id, business_id: biz41.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee20.jpg")
Photo.create!(user_id: jeremy.id, business_id: biz41.id, image:"https://s3.amazonaws.com/helpcoreyladovskyprojectdev/biz-extra-photos/coffee3.jpg")

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

Review.create!(user_id: ilya.id, business_id: biz3.id, body: "I have become very much obsessed with this place!!",
 rating:5, price_range:4, noise_level:1, delivery: false )

Review.create!(user_id: duck.id, business_id: biz4.id, body: "I always get the duck!",
 rating:4, price_range:3, noise_level:1, delivery: false )

 Review.create!(user_id: corey.id, business_id: biz5.id, body: "This place really knows what's going on",
  rating:4, price_range:1, noise_level:4, delivery: false )

 Review.create!(user_id: e.id, business_id: biz5.id, body: "I go her on the regular. It's no big deal but I do go hear a lot! ",
  rating:5, price_range:1, noise_level:4, delivery: false )

 Review.create!(user_id: max.id, business_id: biz6.id, body: "Bad food, good prices",
  rating:3, price_range:1, noise_level:4, delivery: false )

 Review.create!(user_id: yama.id, business_id: biz6.id, body: "Moms food is better",
  rating:1, price_range:2, noise_level:3, delivery: true )

  Review.create!(user_id: corey.id, business_id: biz7.id, body: "This place really knows what's going on",
   rating:4, price_range:1, noise_level:4, delivery: false )

  Review.create!(user_id: max.id, business_id: biz7.id, body: "Bad food, good prices",
   rating:3, price_range:1, noise_level:4, delivery: false )

  Review.create!(user_id: ellis.id, business_id: biz7.id, body: "I go here every year on Valentines Day alone!",
   rating:1, price_range:2, noise_level:3, delivery: true )

  Review.create!(user_id: eric.id, business_id: biz8.id, body: "Moms food is better",
   rating:1, price_range:2, noise_level:3, delivery: true )

  Review.create!(user_id: janka.id, business_id: biz8.id, body: "I hate this place more than I hate long days!",
   rating:1, price_range:2, noise_level:3, delivery: true )

  Review.create!(user_id: jared.id, business_id: biz8.id, body: "Fantastic Place!",
   rating:4, price_range:1, noise_level:3, delivery: true )

  Review.create!(user_id: jeremy.id, business_id: biz9.id, body: "This is my favorite place and anyone whom doesn't like it is wrong. Plain and simple! ",
   rating:5, price_range:1, noise_level:4, delivery: false )

  Review.create!(user_id: e.id, business_id: biz9.id, body: "Meh",
   rating:2, price_range:1, noise_level:3, delivery: false )


   Review.create!(user_id: yama.id, business_id: biz10.id, body: "I like to eat here before I go and eat somewhere",
    rating:3, price_range:2, noise_level:3, delivery: false )

    Review.create!(user_id: corey.id, business_id: biz10.id, body: "This place really knows what's going on",
     rating:4, price_range:1, noise_level:4, delivery: false )

    Review.create!(user_id: max.id, business_id: biz11.id, body: "Cheapest place in the city. Basically free!",
     rating:4, price_range:1, noise_level:4, delivery: false )

    Review.create!(user_id: ellis.id, business_id: biz11.id, body: "This is where I go to be me :-)",
     rating:2, price_range:1, noise_level:3, delivery: false)

    Review.create!(user_id: eric.id, business_id: biz12.id, body: "I used to good dreams...then i went here...never again",
     rating:1, price_range:2, noise_level:3, delivery: true )

    Review.create!(user_id: janka.id, business_id: biz12.id, body: "Don't go here unless you're looking to wait forever for crummy tasting food and unfriendly staff.",
     rating:1, price_range:2, noise_level:3, delivery: true )

    Review.create!(user_id: jared.id, business_id: biz12.id, body: "I eat here every week",
     rating:3, price_range:1, noise_level:3, delivery: true )

    Review.create!(user_id: jeremy.id, business_id: biz13.id, body: "Really good and consistent food.",
     rating:5, price_range:1, noise_level:3, delivery: false )

    Review.create!(user_id: e.id, business_id: biz13.id, body: "I've eater here 9 times this week. Can't wait till number 10",
     rating:4, price_range:2, noise_level:3, delivery: false )






    Review.create!(user_id: yama.id, business_id: biz14.id, body: "Trust me. You should eat here!",
     rating:4, price_range:2, noise_level:3, delivery: false )

     Review.create!(user_id: corey.id, business_id: biz14.id, body: "When I eat out, this is the place I go to.",
      rating:5, price_range:1, noise_level:4, delivery: false )

     Review.create!(user_id: max.id, business_id: biz15.id, body: "I always make sure to eat my weigth here annually",
      rating:4, price_range:1, noise_level:4, delivery: false )

     Review.create!(user_id: ellis.id, business_id: biz15.id, body: "When I need a pick me up, this place picks me way up!",
      rating:3, price_range:1, noise_level:3, delivery: false)

     Review.create!(user_id: eric.id, business_id: biz16.id, body: "I have had better in the barn",
      rating:2, price_range:2, noise_level:1, delivery: true )

     Review.create!(user_id: janka.id, business_id: biz17.id, body: "Fast and easy.",
      rating:4, price_range:2, noise_level:1, delivery: true )

     Review.create!(user_id: jared.id, business_id: biz17.id, body: "What Janka said.",
      rating:3, price_range:1, noise_level:1, delivery: true )

     Review.create!(user_id: jeremy.id, business_id: biz18.id, body: "Love love love this place",
      rating:5, price_range:1, noise_level:3, delivery: false )

     Review.create!(user_id: e.id, business_id: biz18.id, body: "Cotton candy mountains good",
      rating:5, price_range:2, noise_level:3, delivery: false )


        Review.create!(user_id: yama.id, business_id: biz20.id, body: "Don't botther!",
         rating:2, price_range:2, noise_level:1, delivery: true )

         Review.create!(user_id: corey.id, business_id: biz20.id, body: "Fine in a crunch",
          rating:3, price_range:1, noise_level:2, delivery: true )

         Review.create!(user_id: max.id, business_id: biz20.id, body: "Probably never again. I found a hair in my food. It was my partners but still! ",
          rating:3, price_range:2, noise_level:2, delivery: false )

         Review.create!(user_id: ellis.id, business_id: biz21.id, body: "Could it be any better.",
          rating:5, price_range:1, noise_level:3, delivery: false)

         Review.create!(user_id: eric.id, business_id: biz21.id, body: "Best proof of life after death yet. ",
          rating:4, price_range:2, noise_level:1, delivery: false )

         Review.create!(user_id: janka.id, business_id: biz22.id, body: "Not bad at all.",
          rating:4, price_range:2, noise_level:1, delivery: true )

         Review.create!(user_id: jared.id, business_id: biz23.id, body: "Ruff!",
          rating:1, price_range:1, noise_level:4, delivery: true )

         Review.create!(user_id: jeremy.id, business_id: biz24.id, body: "Slow on the water refills.",
          rating:3, price_range:1, noise_level:3, delivery: false )

         Review.create!(user_id: e.id, business_id: biz24.id, body: "So tasty!",
          rating:5, price_range:2, noise_level:3, delivery: false )




        Review.create!(user_id: yama.id, business_id: biz25.id, body: "Just fine",
         rating:2, price_range:2, noise_level:1, delivery: true )

         Review.create!(user_id: corey.id, business_id: biz25.id, body: "I think the floors are uneven because I knocked over my water three times!",
          rating:3, price_range:1, noise_level:2, delivery: true )

         Review.create!(user_id: max.id, business_id: biz25.id, body: "Good times but not great times ",
          rating:3, price_range:2, noise_level:2, delivery: false )

         Review.create!(user_id: ellis.id, business_id: biz25.id, body: "I ate so much I almost exploded. My friend did burst!",
          rating:5, price_range:1, noise_level:3, delivery: false)

         Review.create!(user_id: eric.id, business_id: biz27.id, body: "I liked it. ",
          rating:4, price_range:1, noise_level:1, delivery: false )

         Review.create!(user_id: janka.id, business_id: biz27.id, body: "Best I've had.",
          rating:5, price_range:2, noise_level:1, delivery: true )

         Review.create!(user_id: jared.id, business_id: biz28.id, body: "Too expensive, too loud, avoid like the plague.",
          rating:1, price_range:4, noise_level:4, delivery: true )

         Review.create!(user_id: jeremy.id, business_id: biz29.id, body: "I was in a good mood but the food didn't match. ",
          rating:3, price_range:1, noise_level:3, delivery: false )

         Review.create!(user_id: e.id, business_id: biz29.id, body: "It was satisfactory",
          rating:5, price_range:2, noise_level:3, delivery: false )



        Review.create!(user_id: yama.id, business_id: biz30.id, body: "Literal garbage",
         rating:1, price_range:2, noise_level:1, delivery: true )

         Review.create!(user_id: corey.id, business_id: biz31.id, body: "I liked it, my friend did not.",
          rating:3, price_range:1, noise_level:2, delivery: true )

         Review.create!(user_id: max.id, business_id: biz31.id, body: "Mediocre at best ",
          rating:3, price_range:2, noise_level:2, delivery: true )

         Review.create!(user_id: ellis.id, business_id: biz32.id, body: "Loved it!",
          rating:5, price_range:4, noise_level:3, delivery: false)

         Review.create!(user_id: eric.id, business_id: biz32.id, body: "It was different, but good different.",
          rating:4, price_range:1, noise_level:1, delivery: false )

         Review.create!(user_id: janka.id, business_id: biz34.id, body: "I ate before I came so I couldn't enjoy the food.",
          rating:2, price_range:2, noise_level:4, delivery: true )

         Review.create!(user_id: jared.id, business_id: biz35.id, body: "I'd pass if I were you.",
          rating:2, price_range:4, noise_level:4, delivery: true )

         Review.create!(user_id: jeremy.id, business_id: biz35.id, body: "This place is good. What else can I say? It's good okay!  ",
          rating:4, price_range:1, noise_level:3, delivery: false )

         Review.create!(user_id: e.id, business_id: biz37.id, body: "I enjoyed it.",
          rating:4, price_range:2, noise_level:3, delivery: false )



      Review.create!(user_id: yama.id, business_id: biz38.id, body: "Top knotch of the trees",
       rating:4, price_range:2, noise_level:1, delivery: true )

       Review.create!(user_id: corey.id, business_id: biz38.id, body: "It was a lot of fun. ",
        rating:3, price_range:1, noise_level:2, delivery: true )

       Review.create!(user_id: max.id, business_id: biz39.id, body: "Cleaned the plate. ",
        rating:5, price_range:2, noise_level:2, delivery: true )

       Review.create!(user_id: ellis.id, business_id: biz39.id, body: "I liked this play alot.",
        rating:4, price_range:3, noise_level:3, delivery: false)

       Review.create!(user_id: eric.id, business_id: biz40.id, body: "I accidentaly chocked during the meal, but the food was so bad I was actually hoping to die!",
        rating:1, price_range:1, noise_level:1, delivery: false )

       Review.create!(user_id: janka.id, business_id: biz40.id, body: "You get what you pay for.",
        rating:3, price_range:2, noise_level:4, delivery: true )

       Review.create!(user_id: jared.id, business_id: biz41.id, body: "Dreams really do come true. So happy they're in the neighborhood.",
        rating:5, price_range:4, noise_level:4, delivery: true )

       Review.create!(user_id: jeremy.id, business_id: biz41.id, body: "This is a quality place, happy they moved closer.",
        rating:4, price_range:1, noise_level:3, delivery: false )

       Review.create!(user_id: e.id, business_id: biz41.id, body: "This is a good place.",
        rating:4, price_range:2, noise_level:3, delivery: false )















   #

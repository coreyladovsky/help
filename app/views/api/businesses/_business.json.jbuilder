json.extract! business, :id, :name, :address, :phone_number,
:cuisine, :website, :image, :average_rating, :review_count, :lat, :lng,
:price_range, :noise_level, :delivery

json.image asset_path(business.image.url(:thumb))
json.image_medium asset_path(business.image.url(:croppable))

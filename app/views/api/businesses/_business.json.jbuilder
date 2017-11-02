json.extract! business, :id, :name, :address, :phone_number,
:cuisine, :website, :image, :average_rating, :review_count, :lat, :lng,
:price_range


json.image asset_path(business.image.url(:thumb))

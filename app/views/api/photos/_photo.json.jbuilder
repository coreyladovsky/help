json.extract! photo, :id, :user_id, :business_id, :image


json.image asset_path(photo.image.url)
json.image_medium asset_path(photo.image.url(:croppable))

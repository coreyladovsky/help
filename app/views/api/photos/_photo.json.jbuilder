json.extract! photo, :id, :user_id, :business_id


json.image asset_path(photo.image.url)

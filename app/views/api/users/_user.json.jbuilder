json.extract! user, :id, :email, :image, :first_name, :last_name, :zip_code

json.image asset_path(user.image.url(:thumb))

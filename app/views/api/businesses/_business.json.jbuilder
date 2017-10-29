json.extract! business, :id, :name, :address, :phone_number,
:cuisine, :website, :image


json.image asset_path(business.image.url)

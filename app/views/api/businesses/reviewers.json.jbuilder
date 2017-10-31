@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :email, :image, :first_name, :last_name, :zip_code

  end
end

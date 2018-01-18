


@businesses.each do |business|
  json.set! business.id do
    json.partial! "business", business: business
    json.reviewIds business.reviews.map(&:id)
    json.photoIds business.photos.map(&:id)
  end

end

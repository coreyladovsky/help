


@businesses.each do |business|
  json.set! business.id do
    json.partial! "business", business: business
    json.reviewIds business.reviews.map(&:id)
    json.reviews business.reviews
    json.reviewers business.reviewers
    json.photoIds business.photos.map(&:id)
  end

end

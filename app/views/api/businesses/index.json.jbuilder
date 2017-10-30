@businesses.each do |business|
  json.set! business.id do
    json.partial! "business", business: business
      # json.reviews do
      #   json.array! business.reviews, partial: 'api/reviews/review', as: :review
      # end
    json.reviewIds business.reviews.map(&:id)
  end

end

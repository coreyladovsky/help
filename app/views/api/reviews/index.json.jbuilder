@reviews.each do |review|
  json.set! review.id do
    json.partial! "review", review: review
      # json.reviews do
      #   json.array! business.reviews, partial: 'api/reviews/review', as: :review
      # end

  end

end

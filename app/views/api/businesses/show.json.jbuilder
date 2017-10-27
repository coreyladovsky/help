json.partial! 'business', business: @business


json.reviews do
  json.array! @business.reviews, partial: 'api/reviews/review', as: :review
end

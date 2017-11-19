
#
# @businesses = @businesses.where(["name LIKE ?", name]) if name.present?
# @businesses = @businesses.where(["cuisine LIKE ?", cuisine]) if cuisine.present?
# @businesses = @businesses.where(["price_range <= ?", price_range]) if price_range.present?
# @businesses = @businesses.where(["noise_level <= ?", noise_level]) if noise_level.present?
# @businesses = @businesses.where(["delivery === true"]) if delivery.present?

debugger

@businesses.each do |business|
  json.set! business.id do
    json.partial! "business", business: business
      # json.reviews do
      #   json.array! business.reviews, partial: 'api/reviews/review', as: :review
      # end
    json.reviewIds business.reviews.map(&:id)
  end

end

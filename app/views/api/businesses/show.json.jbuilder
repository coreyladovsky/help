json.partial! 'business', business: @business

json.extract! @business, :mon_start_time, :mon_end_time, :tue_start_time, :tue_end_time, :wed_start_time,
:wed_end_time, :thur_start_time, :thur_end_time, :fri_start_time, :fri_end_time,
:sat_start_time, :sat_end_time, :sun_start_time, :sun_end_time,:price_range, :delivery, :noise_level

json.reviews do
  json.array! @business.reviews, partial: 'api/reviews/review', as: :review
end

json.photos do
  json.array! @business.photos, partial: 'api/photos/photo', as: :photo
end

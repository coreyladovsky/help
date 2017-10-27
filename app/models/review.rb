class Review < ApplicationRecord
  validates :rating, :body, :user_id, :business_id, presence: true

  belongs_to :user
  belongs_to :business

  

end

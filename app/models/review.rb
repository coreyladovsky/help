class Review < ApplicationRecord
  validates :rating, :body, :user_id, :business_id, presence: true
  validates_uniqueness_of :user_id, scope: :business_id
  belongs_to :user
  belongs_to :business

  def rating_must_be_greater_than_zero
    if rating.present? && rating < 1
      errors.add(:rating, "must be greater than zero")
    end
  end

end

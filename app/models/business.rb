class Business < ApplicationRecord
  validates :name, :address, :phone_number, :cuisine, presence: true

  has_many :reviews

  has_many :photos

  has_many :reviewers, through: :reviews, source: :user

  has_attached_file :image, styles: { thumb: '100x100', croppable: '600x600>', big: '1000x1000>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def in_bounds(bounds)

    return true if bounds == "" || bounds.nil?
      ky = 4000 / 360
      kx = Math.cos(Math::PI * bounds[0].to_f / 180.0) * ky
      dx = (bounds[1].to_f - self.lng).abs * kx
      dy = (bounds[0].to_f - self.lat).abs * ky
      Math.sqrt(dx * dx + dy * dy ) <= 0.8
  end

  def average_rating
    return 0 unless !!self.reviews
    (self.reviews.average(:rating).to_f * 2.to_f).round / 2.0
  end

  def review_count
    return 0 unless self.reviews
    self.reviews.count
  end

  def price_range
    return 0 unless self.reviews
    self.reviews.average(:price_range).to_i
  end

  def delivery
    return false unless self.reviews
    self.reviews.where(delivery: [true]).count > self.reviews.where(delivery: [false]).count
  end

  def noise_level
    return 0 unless self.reviews
    self.reviews.average(:noise_level).to_i
  end

end

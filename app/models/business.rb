class Business < ApplicationRecord
  validates :name, :address, :phone_number, :cuisine, presence: true

  has_many :reviews

  has_many :photos

  has_many :reviewers, through: :reviews, source: :user

  has_attached_file :image, styles: { thumb: '100x100', croppable: '600x600>', big: '1000x1000>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def self.in_bounds(bounds)
    self.where("lat < ?", bounds[:northEast][:lat]).where("lat > ?", bounds[:southWest][:lat])
    .where("lng < ?", bounds[:northEast][:lng]).where("lng < ?" ,bounds[:southWest][:lng])
  end

end

class Business < ApplicationRecord
  validates :name, :address, :phone_number, :cuisine, presence: true

  has_many :reviews

  has_many :photos

  has_many :reviewers, through: :reviews, source: :user

  has_attached_file :image, styles: { thumb: 'x100', croppable: '600x600>', big: '1000x1000>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end

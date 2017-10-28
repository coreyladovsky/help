class Business < ApplicationRecord
  validates :name, :address, :phone_number, :cuisine, presence: true

  has_many :reviews

  has_many :photos

  has_attached_file :image, default_url: "default_biz.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end

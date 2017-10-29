class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :business


  has_attached_file :image, default_url: "default.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end

class Photo < ApplicationRecord
  belongs_to :user
  belongs_to :business


  has_attached_file :image, styles: { thumb: '100x100', croppable: '600x600>', big: '1000x1000>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end

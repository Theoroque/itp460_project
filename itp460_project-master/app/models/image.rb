class Image < ActiveRecord::Base
  attr_accessible :description, :image, :title
  mount_uploader :image, ImagesUploader

end

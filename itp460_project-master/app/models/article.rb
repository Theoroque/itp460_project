class Article < ActiveRecord::Base
  attr_accessible :content, :featured, :mainPhoto, :published, :title, :category_id

  has_one :category
end

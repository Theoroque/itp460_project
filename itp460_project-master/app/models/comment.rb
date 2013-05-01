class Comment < ActiveRecord::Base
  belongs_to :article
  attr_accessible :approved, :comment, :name, :article_id, :article

   validates_presence_of :comment, :name
end

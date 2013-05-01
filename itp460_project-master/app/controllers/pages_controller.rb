class PagesController < ApplicationController

  def index
    @featured = Article.where("featured = true").limit(5)
  end

  def about

  end
end

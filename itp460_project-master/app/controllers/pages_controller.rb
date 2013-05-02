class PagesController < ApplicationController

  def index
    @featured = Article.where("featured = true && published = true ").limit(5)
  end

  def about

  end
end

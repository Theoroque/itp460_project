class AdminController < ApplicationController

  before_filter :authenticate_user!, except: [:login]


  def login
       if user_signed_in?
        redirect_to dashboard_path
      end
  end

  def dashboard
    redirect_to articles_path
  end

  def images
    @images = Image.all

  end


  def new_image

    @image = Image.new
    @image.image= Image.new

  end


end

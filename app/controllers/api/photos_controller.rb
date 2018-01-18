
class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      business = @photo.business
      render json: business, include: [:photos]
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    business = @photo.business
    @photo.destroy!
    render json: business, include: [:photos]
  end

  private
  def photo_params
    params.require(:photo).permit(:image, :business_id, :user_id)
  end
end

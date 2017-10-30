class Api::ReviewsController < ApplicationController


  def index
    @reviews = Review.all
  end

  def new
  end

  def create
    @review = Review.new(review_params)
    @review.business_id = params[:business_id]
    @review.user_id = current_user
    if @review.save
      business = @review.business_id
      render json: business, include: [:reviews]
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def edit
    @review = current_user.reviews.find(params[:id])
  end

  def destroy
    @review = current_user.reviews.find(params[:id])
    business = @review.business_id
    @review.destory!
    render json: business
  end

  private
  def review_params
    params.require(:review).permit(:rating, :price_range,
    :body, :delivery, :noise_level, :created_at)
  end
end

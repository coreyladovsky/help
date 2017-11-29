class Api::BusinessesController < ApplicationController
  def index
    # @businesses = Business.in_bounds(params[:bounds]).includes(:reviews) # running a class method to get average rating for all of these businesses
    # businesses = params[:bounds] ? Business.in_bounds(params[:bounds]) : Business.all
    # @businesses = businesses.includes(:reviews) || {}

    @businesses = Business.all.includes(:reviews).includes(:photos)
    @businesses = @businesses.where(["name LIKE ? OR cuisine LIKE ?", "#{business_params[:name]}", "#{business_params[:cuisine]}" ]) if business_params[:name] != ""|| business_params[:cuisine] !=""

    quality_bizs = []
    delivers = []
    @businesses.each do |business|
      # if business_params[:delivery] == "true"
      #   next if business.delivery == false
      # end


      # if (business.price_range <= business_params[:price_range].to_i) &&
      #   (business.noise_level <= business_params[:noise_level].to_i) &&

      if  business.in_bounds(params[:business][:bounds])
          quality_bizs << business
      end
    end
    @businesses = quality_bizs.concat(delivers)



  end

  def show
    @business = Business.find(params[:id])
  end

  def create
    @business = Business.new(business_params)

    if @businesses.save
      render "api/business/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def update
    @business = Business.find(params[:id])

    if @business.update(business_params)
      render "api/business/show"
    else
      render json: @business.errors.full_messages, status: 422
    end
  end

  def destroy
    @business = Business.find(params[:id])

    if @post.destroy
      render "api/business/index"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def reviewers
    @business = Business.includes(:reviewers).find(params[:id])
    @users = @business.reviewers
    render :reviewers
  end

  private

  def business_params
    params.require(:business).permit(:name, :address, :phone_number, :cuisine,
    :mon_start_time, :mon_end_time, :tue_start_time, :tue_end_time, :wed_start_time,
  :wed_end_time, :thur_start_time, :thur_end_time, :fri_start_time, :fri_end_time,
:sat_start_time, :sat_end_time, :sun_start_time, :sun_end_time, :website, :image, :price_range,
:average_rating, :review_count, :delivery, :noise_level, :lat, :lng, :bounds, :in_bounds)
  end
end

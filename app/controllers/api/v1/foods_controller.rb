class Api::V1::FoodsController < ApplicationController
  before_action :set_food, only: [:show, :update, :destroy]
  respond_to :json

  # GET /foods
  def index
    respond_with Food.all
  end

  # GET /foods/1
  def show
    respond_with @food
  end

  # POST /foods
  def create
    @food = Food.new(food_params)

    if @food.save
      respond_with @food, status: :created, location: [:api, :v1, @food]
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @food.update(food_params)
      respond_with @food, status: :ok, location: [:api, :v1, @food]
    else
      render json: { errors: @food.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @food.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_food
    @food = Food.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def food_params
    params.require(:food).permit(:name, :composition, :cost, :food_category_id, :position)
  end
end

class Api::V1::OrderFoodsController < ApplicationController
  before_action :set_order_food, only: [:show, :update, :destroy]
  respond_to :json

  # GET /order_foods
  def index
    respond_with OrderFood.all
  end

  # GET /order_foods/1
  def show
    respond_with @order_food
  end

  # POST /order_foods
  def create
    @order_food = OrderFood.new(order_food_params)

    if @order_food.save
      respond_with @order_food, status: :created, location: [:api, :v1, @order_food]
    else
      render json: { errors: @order_food.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /order_foods/1
  def update
    if @order_food.update(order_food_params)
      respond_with @order_food, status: :ok, location: [:api, :v1, @order_food]
    else
      render json: { errors: @order_food.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /order_foods/1
  def destroy
    @order_food.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_order_food
    @order_food = OrderFood.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def order_food_params
    params.require(:order_food).permit(:food_id, :order_id, :count)
  end
end

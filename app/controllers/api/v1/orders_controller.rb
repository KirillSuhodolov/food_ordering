class Api::V1::OrdersController < Api::BaseApiController
  before_action :set_order, only: [:show, :update, :destroy]
  before_filter :authenticate_user, except: [:create]
  respond_to :json

  # GET /orders
  def index
    if params[:date]
      if current_user.is_admin
        result = Order.by_date(params[:date])
      else
        result = Order.by_user(current_user).by_date(params[:date])         
      end
    elsif current_user.is_admin
      result = Order.all
    end
    respond_with result 
  end

  # GET /orders/1
  def show
    respond_with @order
  end

  # POST /orders
  def create
    @order = Order.new(order_params)

    if @order.save
      respond_with @order, status: :created, location: [:api, :v1, @order]
    else
      render json: { errors: @order.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /orders/1
  def update
    if @order.update(order_params)
      respond_with @order, status: :ok, location: [:api, :v1, @order]
    else
      render json: { errors: @order.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /orders/1
  def destroy
    @order.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_order
    @order = Order.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def order_params
    params.require(:order).permit(:comment, :user_id, :is_processed, :day)
  end
end
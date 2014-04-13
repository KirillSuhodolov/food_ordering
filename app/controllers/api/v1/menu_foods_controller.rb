class Api::V1::MenuFoodsController < Api::BaseApiController
  before_action :set_menu_food, only: [:show, :update, :destroy]
  respond_to :json

  # GET /menu_foods
  def index
    respond_with MenuFood.all
  end

  # GET /menu_foods/1
  def show
    respond_with @menu_food
  end

  # POST /menu_foods
  def create
    @menu_food = MenuFood.new(menu_food_params)

    if @menu_food.save
      respond_with @menu_food, status: :created, location: [:api, :v1, @menu_food]
    else
      render json: { errors: @menu_food.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_foods/1
  def update
    if @menu_food.update(menu_food_params)
      respond_with @menu_food, status: :ok, location: [:api, :v1, @menu_food]
    else
      render json: { errors: @menu_food.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /menu_foods/1
  def destroy
    @menu_food.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_menu_food
    @menu_food = MenuFood.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def menu_food_params
    params.require(:menu_food).permit(:food_id, :menu_id, :is_visible)
  end
end

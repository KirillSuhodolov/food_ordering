class Api::V1::FoodCategoriesController < Api::BaseApiController
  before_action :set_food_category, only: [:show, :update, :destroy]
  before_filter :authenticate_user, except: [:index]
  respond_to :json

  # GET /food_categories
  def index
    respond_with FoodCategory.all
  end

  # GET /food_categories/1
  def show
    respond_with @food_category
  end

  # POST /food_categories
  def create
    @food_category = FoodCategory.new(food_category_params)

    if @food_category.save
      respond_with @food_category, status: :created, location: [:api, :v1, @food_category]
    else
      render json: { errors: @food_category.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_categories/1
  def update
    if @food_category.update(food_category_params)
      respond_with @food_category, status: :ok, location: [:api, :v1, @food_category]
    else
      render json: { errors: @food_category.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /food_categories/1
  def destroy
    @food_category.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_food_category
    @food_category = FoodCategory.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def food_category_params
    params.require(:food_category).permit(:name, :position, :food_group_id)
  end

  def ability
    {
      admin: [:index, :show, :create, :update, :destroy],
      other: [:index, :show]
    }
  end
end

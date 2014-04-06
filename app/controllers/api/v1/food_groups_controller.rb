class Api::V1::FoodGroupsController < ApplicationController
  before_action :set_food_group, only: [:show, :update, :destroy]
  respond_to :json

  # GET /food_groups
  def index
    respond_with FoodGroup.all
  end

  # GET /food_groups/1
  def show
    respond_with @food_group
  end

  # POST /food_groups
  def create
    @food_group = FoodGroup.new(food_group_params)

    if @food_group.save
      respond_with @food_group, status: :created, location: [:api, :v1, @food_group]
    else
      render json: { errors: @food_group.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_groups/1
  def update
    if @food_group.update(food_group_params)
      respond_with @food_group, status: :ok, location: [:api, :v1, @food_group]
    else
      render json: { errors: @food_group.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /food_groups/1
  def destroy
    @food_group.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_food_group
    @food_group = FoodGroup.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def food_group_params
    params[:food_group]
  end
end

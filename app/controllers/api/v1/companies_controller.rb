class Api::V1::CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]
  respond_to :json

  # GET /companies
  def index
    respond_with Company.all
  end

  # GET /companies/1
  def show
    respond_with @company
  end

  # POST /companies
  def create
    @company = Company.new(company_params)

    if @company.save
      respond_with @company, status: :created, location: [:api, :v1, @company]
    else
      render json: { errors: @company.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /companies/1
  def update
    if @company.update(company_params)
      respond_with @company, status: :ok, location: [:api, :v1, @company]
    else
      render json: { errors: @company.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /companies/1
  def destroy
    @company.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_company
    @company = Company.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def company_params
    params.require(:company).permit(:name, :address)
  end
end

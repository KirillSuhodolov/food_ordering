class Api::V1::MenusController < Api::BaseApiController
  before_action :set_menu, only: [:show, :update, :destroy]
  respond_to :json

  # GET /menus
  def index
    if params[:date]
      respond_with [ Menu.find_or_create_by(day: params[:date]) ]
    else
      respond_with Menu.all
    end
  end

  # GET /menus/1
  def show
    respond_with @menu
  end

  # POST /menus
  def create
    @menu = Menu.new(menu_params)

    if @menu.save
      respond_with @menu, status: :created, location: [:api, :v1, @menu]
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menus/1
  def update
    if @menu.update(menu_params)
      respond_with @menu, status: :ok, location: [:api, :v1, @menu]
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /menus/1
  def destroy
    @menu.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_menu
    @menu = Menu.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def menu_params
    params.require(:menu).permit(:day, :available)
  end
end

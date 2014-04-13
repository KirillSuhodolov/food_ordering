class Api::V1::UsersController < Api::BaseApiController
  before_action :set_user, only: [:show, :update, :destroy]
  respond_to :json

  # GET /users
  def index
    respond_with User.users
  end

  # GET /users/1
  def show
    respond_with @user
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      respond_with @user, status: :created, location: [:api, :v1, @user]
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      respond_with @user, status: :ok, location: [:api, :v1, @user]
    else
      render json: { errors: @user.errors }, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def user_params
    params.require(:user).permit(:email, :company_id, :name, :phone,
     :address, :is_subscribe, :position, :status )
  end
end

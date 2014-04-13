class Api::BaseApiController < ActionController::Base
  before_filter :authenticate_user

  protected

  def authenticate_user
    @current_user = User.find_by authentication_token: params[:auth_token] if params[:auth_token]
    render json: {}, status: 401 unless @current_user
  end

  def current_user
    @current_user
  end
end
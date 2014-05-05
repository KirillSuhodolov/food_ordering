class Api::BaseApiController < ActionController::Base
  before_filter :authenticate_user

  protected

  def authenticate_user
    if params[:auth_token]
      user = User.find_by authentication_token: params[:auth_token]
      user_status = user.status ? user.status.to_sym : :other
      @current_user = user if ability[user_status].include? params[:action].to_sym
    end
    render json: {}, status: 401 unless @current_user
  end

  def current_user
    @current_user
  end

  def ability
    {
      admin: [:index, :show, :create, :update, :destroy],
      other: [:index, :show, :create, :update, :destroy],
      unauthorized: []
    }
  end
end
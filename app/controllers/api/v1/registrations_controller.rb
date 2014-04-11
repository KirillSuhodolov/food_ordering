class Api::V1::RegistrationsController < Devise::RegistrationsController
  #respond_to :json

  def create
    build_resource resource_params
    
    if resource.save
      sign_up(resource_name, resource)
      render json: resource, status: 201
    else
      render json: { :errors => @user.errors.messages }, status: 422
    end
  end

  def update
    resource = resource_class.find(params[:id])
    fields = resource_params
    user = resource.update_attributes(fields)
    if user
      render json: resource
    else
      clean_up_passwords resource
      render json: { :errors => resource.errors.full_messages[0] }, status: 422
    end
  end

  private

  def resource_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation,
                                 :company_id, :name, :phone,
                                 :address, :is_subscribe, :position, :status)
  end

end
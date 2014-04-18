class Api::V1::RegistrationsController < Devise::RegistrationsController
  #respond_to :json
  skip_before_action :verify_authenticity_token

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
    if fields[:password].empty?
      fields.delete :password
    end
    if fields[:password_confirmation].empty?
      fields.delete :password_confirmation
    end
    user = resource.update_attributes(fields)
    if user
      render json: resource
    else
      clean_up_passwords resource
      render json: { :errors => resource.errors.full_messages[0] }, status: 422
    end
  end

  def generate_new_password_email
    user = User.find_by(email: resource_params[:email])
    if user
     user.send_reset_password_instructions
    else
     render json: { errors: {} }, status: 422
    end
  end

  def recover_password
    if params[:reset_password_token].empty?
    end 
  end

  private

  def resource_params
    params.require(:user).permit(:email, :name, :password, :password_confirmation,
                                 :company_id, :name, :phone, :reset_password_token,
                                 :address, :is_subscribe, :position, :status)
  end

end
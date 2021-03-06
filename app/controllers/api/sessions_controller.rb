class Api::SessionsController < Devise::SessionsController
  def create
    resource = if params[:email] && params[:password]
                 resource_from_credentials
               elsif params[:remember_token]
                 resource_from_remember_token
               elsif params[:auth_token]
                 resource_class.find_by authentication_token: params[:auth_token]
               end

    return invalid_credentials({recall: true}) unless resource

    resource.ensure_authentication_token!

    data = {
        user_id: resource.id,
        auth_token: resource.authentication_token,
        email: resource.email
    }
    if params[:remember] or params[:remember] == 'true'
      resource.remember_me!
      data[:remember_token] = remember_token(resource)
    end
    render json: data, status: 201
  end

  def destroy
    return missing_params unless params[:auth_token]

    resource = resource_class.find_by authentication_token: params[:auth_token]
    return invalid_credentials unless resource

    resource.reset_authentication_token!
    resource.forget_me!

    render json: {user_id: resource.id}, status: 200
  end

  protected

  def missing_params
    render json: {}, status: 400
  end

  def invalid_credentials(data = {})
    render json: data, status: 401
  end

  def remember_token(resource)
    data = resource_class.serialize_into_cookie(resource)
    "#{data.first.first}-#{data.last}"
  end

  def resource_from_remember_token
    token = params[:remember_token]
    id, identifier = token.split('-')
    User.serialize_from_cookie(id, identifier)
  end

  def resource_from_credentials
    data = { email: params[:email] }
    if res = User.find_for_database_authentication(data)
      if res.valid_password?(params[:password])
        res
      end
    end
  end
end
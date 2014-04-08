class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :company_id, :name, :phone,
     :address, :is_subscribe, :position, :status	
end

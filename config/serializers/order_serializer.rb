class OrderSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :cost
end
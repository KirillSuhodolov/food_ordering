class OrderFoodSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :order_id, :count
end

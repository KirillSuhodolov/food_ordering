class OrderFoodSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :order_id, :count, :cost
  has_one :food, embed: :ids, include: true
end

class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :position, :composition, :food_category_id
end
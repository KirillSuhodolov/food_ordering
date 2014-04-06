class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :cost, :composition, :food_category_id
end
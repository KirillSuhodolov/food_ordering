class MenuFoodSerializer < ActiveModel::Serializer
  attributes :id, :food_id, :menu_id, :is_visible
end

class FoodGroupSerializer < ActiveModel::Serializer
  attributes :id
  has_many :food_categories, embed: :ids, include: false
end
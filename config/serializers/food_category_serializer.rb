class FoodCategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :position
  has_many :foods, embed: :ids, include: true
end

class FoodCategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :foods, embed: :ids, include: true
end

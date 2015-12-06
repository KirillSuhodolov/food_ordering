class FoodCategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :food_group_id
  has_many :foods, embed: :ids, include: true
  def foods
    Food.existing
  end
end

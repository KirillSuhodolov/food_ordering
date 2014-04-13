class FoodCategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :position
  has_many :foods, embed: :ids, include: true
  def foods
    Food.existing
  end
end

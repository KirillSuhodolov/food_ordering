class MenuSerializer < ActiveModel::Serializer
  attributes :id, :day, :available
  has_many :menu_foods, embed: :ids, include: true
  has_many :foods, embed: :ids, include: true, key: :deleted_foods

  def available
  	object.available = object.available.strftime("%Y-%m-%d %H:%M")
  end

  def foods
    Food.current_deleted object
  end
end

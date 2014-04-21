class MenuSerializer < ActiveModel::Serializer
  attributes :id, :day, :available
  has_many :menu_foods, embed: :ids, include: true

  def available
  	object.available = object.available.strftime("%Y-%m-%d %H:%M")
  end
end

class MenuSerializer < ActiveModel::Serializer
  attributes :id, :day, :available
  has_many :menu_foods, embed: :ids, include: true

  def available
  	object.available = object.available.to_formatted_s(:long)
  end
end

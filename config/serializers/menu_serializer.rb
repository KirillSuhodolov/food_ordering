class MenuSerializer < ActiveModel::Serializer
  attributes :id, :day, :available
  has_many :menu_foods, embed: :ids, include: true
end

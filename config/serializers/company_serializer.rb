class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :position
  has_many :users, embed: :ids, include: true
end
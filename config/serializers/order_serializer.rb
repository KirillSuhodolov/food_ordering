class OrderSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user_id, :is_processed, :day
  has_many :order_foods, embed: :ids, include: true
end
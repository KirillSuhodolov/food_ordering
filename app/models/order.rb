class Order < ActiveRecord::Base
  belongs_to :user
  has_many :foods, through: :order_foods
  has_many :order_foods
end
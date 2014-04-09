class OrderFood < ActiveRecord::Base
  belongs_to :food
  belongs_to :order
  before_create do |order_food|
  	order_food.cost = order_food.food.cost
  end
end

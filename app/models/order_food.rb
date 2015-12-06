# == Schema Information
#
# Table name: order_foods
#
#  id         :integer          not null, primary key
#  food_id    :integer
#  order_id   :integer
#  count      :integer
#  cost       :integer
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class OrderFood < ActiveRecord::Base
  belongs_to :food
  belongs_to :order
  before_create do |order_food|
  	order_food.cost = order_food.food.cost
  end
end

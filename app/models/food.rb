class Food < ActiveRecord::Base
  belongs_to :food_category
  has_many :orders, through: :order_foods
  has_many :order_foods	
end

class FoodCategory < ActiveRecord::Base
  belongs_to :food_groups
  has_many :foods
end
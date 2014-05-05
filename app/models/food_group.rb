# == Schema Information
#
# Table name: food_groups
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class FoodGroup < ActiveRecord::Base
  has_many :food_categories
end

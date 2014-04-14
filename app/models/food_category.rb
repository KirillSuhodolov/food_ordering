# == Schema Information
#
# Table name: food_categories
#
#  id            :integer          not null, primary key
#  name          :string(255)
#  food_group_id :integer
#  position      :integer
#  user_id       :integer
#

class FoodCategory < ActiveRecord::Base
  belongs_to :food_groups
  has_many :foods
end

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
  after_destroy :clean_relations

  protected
  
  def clean_relations
		self.food_categories.each do |food_category| 
			food_category.food_group_id = nil
			food_category.save
  	end
  end
end
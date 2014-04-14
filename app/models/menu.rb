# == Schema Information
#
# Table name: menus
#
#  id         :integer          not null, primary key
#  day        :date
#  available  :time
#  user_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Menu < ActiveRecord::Base
  has_many :menu_foods

  before_create do |menu|
  	menu.available = "#{menu.day} 10:00:00"
	end	
  
  after_create do |menu|
  	Food.existing.each do |food|
  		MenuFood.create({
  			menu: menu,
  			food: food
			})
  	end
  end
end
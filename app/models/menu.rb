class Menu < ActiveRecord::Base
  has_many :menu_foods

  after_create do |menu|
  	Food.existing.each do |food|
  		MenuFood.create({
  			menu: menu,
  			food: food
			})
  	end
  end
end

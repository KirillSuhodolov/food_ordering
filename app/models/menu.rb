class Menu < ActiveRecord::Base
  has_many :menu_foods

  after_create do |menu|
  	Food.all.each do |food|
  		MenuFood.create({
  			menu: menu,
  			food: food
			})
  	end
  end
end

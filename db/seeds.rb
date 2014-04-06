# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

FoodCategory.create([
	{name: 'food category 1'},
	{name: 'food category 2'},
	{name: 'food category 3'},
	{name: 'food category 4'}
	])

FoodCategory.all.each do |category|
	10.times do |n|
		Food.create({name: "food name #{n}", composition: "food composition #{n}", food_category: category, cost: 100 * n})
	end
end

Menu.create({day: Date.current.to_s('%m-%d-%y'), available: Time.now.to_s(:time) })
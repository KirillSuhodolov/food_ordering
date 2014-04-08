# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

FoodCategory.create([
	{name: 'food category 1', position: 0},
	{name: 'food category 2', position: 1},
	{name: 'food category 3', position: 2},
	{name: 'food category 4', position: 3}
	])

FoodCategory.all.each do |category|
	10.times do |n|
		Food.create({
			name: "food name #{n}", 
			composition: "food composition #{n}",
		  food_category: category,
		  cost: 100 * (n+1),
		  position: n
	  })
	end
end

5.times do |n|
	User.create({
		name: "user #{n}",
		email: "user#{n}@email.com",
		address: "дом #{n}",
		position: n,
		phone: '+23123123123'
	})
end
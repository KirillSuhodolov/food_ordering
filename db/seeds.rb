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
		address: "house #{n}",
		position: n,
		password: '1234qwer',
		phone: "+23123123123"
	})
end

3.times do |n|
	company = Company.create({
		name: "Company #{n}",
		address: "address #{n}",
		position: n + 1	
	})

	3.times do |n|
		User.create({
			name: "user #{n*2}",
			email: "user#{n*2}@email.com",
			address: "house #{n*2}",
			position: n,
			company: company,
			password: '1234qwer',
			phone: "+23123123123"
		})
	end
end

User.users.each do |user|
	order = Order.create({
		user: user,
		day: Date.today
	})			
	3.times do |n|
		OrderFood.create({
			order: order,
			food_id: rand(1..40),
			count: rand(1..10)	
		})
	end
end

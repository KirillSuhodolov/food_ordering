var ProxyCategory = Em.Object.extend({
	resultCost: function() {
		return this.get('menuFoods').reduce(function(previousValue, obj){
			return previousValue + obj.get("selected") * obj.get('food.cost');
		}, 0);	
	}.property('menuFoods.@each.selected'),
});

export default Em.ArrayController.extend({
	sortProperties: ['category.position'],
	sortAscending: true,		
	isAdmin: false,
	movingObject: null,
	slicingArray: null,
	queryParams: ['date'],
	menu: null,
	date: moment().format(config.SETTINGS.dateFormats.route),
	
	resultCost: function() {
		return this.get('content').reduce(function(previousValue, obj){
			return previousValue + obj.get("resultCost");
		}, 0);		
	}.property('@each.resultCost'),

	calendarFormat: function() {
		return config.SETTINGS.dateFormats.calendar
	}.property(''),

	prev: function() {
		var date = moment(this.get('date'));	
		return date.subtract('w',1).startOf('isoWeek').add('d', 4).format(config.SETTINGS.dateFormats.route);
	}.property('date'),
	
	next: function() {
		var date = moment(this.get('date'));	
		return date.add('w',1).startOf('isoWeek').format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	monday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 1 ) {
			date = date.startOf('isoWeek').add('d', 0); 
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	tuesday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 2 ) {
			date = date.startOf('isoWeek').add('d', 1);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	wednesday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 3 ) {
			date = date.startOf('isoWeek').add('d', 2);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	thursday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 4 ) {
			date = date.startOf('isoWeek').add('d', 3);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	friday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 5 ) {
			date = date.startOf('isoWeek').add('d', 4);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'), 

	actions: {
		createOrder: function() {
			var controller = this;
			this.store.createRecord('order', {
				cost: this.get('resultCost'),	
			}).save().then(function(order){
				var orderFoods = [];
				controller.get('content').forEach(function(object){
					if (object.get('resultCost') > 0) {
						object.get('menuFoods').filter(function(menuFood){
							return menuFood.get('selected') > 0
						}).forEach(function(menuFood){
							orderFoods.addObject(controller.store.createRecord('orderFood', {
								food: menuFood.get('food'),
								order: order,
								count: menuFood.get('selected') 
							}).save());
						});
					}
				});
				Em.RSVP.all(orderFoods).then(function(){
					controller.transitionToRoute('order.confirm', order);
					controller.get('content').forEach(function(object){
						object.get('menuFoods').forEach(function(menuFood){
							menuFood.set('selected', 0);
						});
					});
				});
			});	
		},
		addCategory: function() {
			var controller = this;
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название',
				position: this.get('length') 
			}).save().then(function(category){
				controller.addObject(
					ProxyCategory.create({
						category:category, 
						menuFoods: Ember.ArrayController.create({
							content: [],
							sortProperties: ['food.position'],
							sortAscending: true
						})
					})
					);	
			})			
		}
	}  
});
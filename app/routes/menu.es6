export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('menu', 1)
	},
	setupController: function(controller, model) {
		this._super(controller, model)
		this.store.find('foodCategory').then(function(categories){
			var categoriesProxyArray = [];
			categories.forEach(function(category){
				categoriesProxyArray.addObject(
				Em.Object.create({
									category:category, 
									menuFoods: Ember.ArrayController.create({
										content: model.get('menuFoods').filter(function(item){
											if ( item.get('food.foodCategory') == category ) { return true }
										}),
									  sortProperties: ['food.position'],
									  sortAscending: true
									})
								})
				);	
			});
			controller.set('foodCategories', categoriesProxyArray)
		});
	}  
});
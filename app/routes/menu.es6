export default Ember.Route.extend({
  queryParams: {
    category: {
      refreshModel: true
    }
  },
	model: function(params) {
		return this.store.find('menu', params)
	},
	setupController: function(controller, model) {
		model = model.get('firstObject');
		controller.set('menu', model);
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
			controller.set('model', categoriesProxyArray);
		});
	},
  actions: {
    queryParamsDidChange: function() {
      this.refresh();	
    }
  }  
});
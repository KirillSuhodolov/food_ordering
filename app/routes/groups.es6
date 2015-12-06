export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('foodGroup');
	},
	setupController: function(controller, model) {
		this._super(controller, model);
        this.store.find('foodCategory').then(function(foodCategories){
            controller.set('foodCategories', foodCategories.sortBy('id'));
        });
    }
});
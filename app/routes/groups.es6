export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('foodGroup');
	},
	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('foodCategories', this.store.find('foodCategory'));
	}
});
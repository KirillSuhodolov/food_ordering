export default Ember.Route.extend({
	queryParams: {
		category: {
			refreshModel: true
		}
	},
	model: function(params) {
		return this.store.find('order', params)
	},  
	setupController: function(controller, model) {
		this._super(controller, model);
		controller.set('users', this.store.findQuery('user'));
		controller.set('companies', this.store.findQuery('company'));
	},
	actions: {
		queryParamsDidChange: function() {
			this.refresh();	
		}
	}  
});
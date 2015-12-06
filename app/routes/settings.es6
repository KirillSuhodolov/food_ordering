export default Em.Route.extend({
	authRedirectable: true,	
	model: function() {
		return this.get('store').find('user', this.get('auth.userId'));	
	},
	setupController: function(controller, model) {
		this._super(controller, model);
		this.store.find('company').then(function(companies){
			var firstObject = companies.findBy('id', '1');
			controller.set('companies', companies.removeObject(firstObject));
		});
	}
});
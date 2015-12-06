export default Ember.Route.extend({
	authRedirectable: true,
	model: function(params) {
		return this.store.find('company')
	}
});
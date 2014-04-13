export default Em.Route.extend({
  authRedirectable: true,
	queryParams: {
		category: {
			refreshModel: true
		}
	},
	model: function(params) {
		return this.get('store').findQuery('order', params);	
	},
	actions: {
		queryParamsDidChange: function() {
			this.refresh();	
		}
	} 	
});
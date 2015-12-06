export default Em.Route.extend({
	authRedirectable: true,
		queryParams: {
		category: {
			refreshModel: true
		}
	},
	actions: {
		queryParamsDidChange: function() {
			this.refresh();	
		}
	}  
});
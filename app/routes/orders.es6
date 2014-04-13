import ProxyCompany from 'app/models/objects/proxy-company'

export default Ember.Route.extend({
	authRedirectable: true,
	queryParams: {
		category: {
			refreshModel: true
		}
	},
	model: function(params) {
		return this.store.find('order', params)
	},  
	setupController: function(controller, model) {
		this.store.find('company').then(function(company){
			var ordersProxyArray = [];
			company.forEach(function(company){
				ordersProxyArray.addObject(
					ProxyCompany.create({
						company: company, 
						orders: model.filter(function(item){
							return item.get('user.company') == company 
						}),
					})
				)
			});	
			controller.set('model', ordersProxyArray);
		});	

	},
	actions: {
		queryParamsDidChange: function() {
			this.refresh();	
		}
	}  
});
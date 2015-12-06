import ProxyCompany from 'app/models/objects/proxy-company'
import Pagination from 'app/mixins/pagination-route'

export default Ember.Route.extend(Pagination,
{
	modelName: 'order',
	authRedirectable: true,
	queryParams: {
		category: {
			refreshModel: true
		}
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
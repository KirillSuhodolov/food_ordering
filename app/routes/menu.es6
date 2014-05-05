import MenuFoods from 'app/controllers/menu/menu-foods'
import ProxyCategory from 'app/models/objects/proxy-category'
import Pagination from 'app/mixins/pagination-route'

export default Ember.Route.extend(Pagination, 
{
	modelName: 'menu',
	queryParams: {
		category: {
			refreshModel: true
		}
	},
	setupController: function(controller, model) {
		model = model.get('firstObject');
		controller.set('menu', model);
		this.store.find('foodCategory').then(function(categories){
			controller.set('foodCategories', categories);
			var categoriesProxyArray = [];
			categories.forEach(function(category){
				categoriesProxyArray.addObject(
					ProxyCategory.create({
						category:category, 
						menuFoods: MenuFoods.create({
							proxyController: controller,
							content: model.get('menuFoods').filter(function(item){
								if ( item.get('food.foodCategory') == category ) { return true }
							}),
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
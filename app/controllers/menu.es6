import ProxyCategory from 'app/models/objects/proxy-category'
import PaginationMixin from 'app/mixins/pagination'

export default Em.ArrayController.extend(
	PaginationMixin,
	{
	sortProperties: ['category.position'],
	sortAscending: true,		
	isAdmin: false,
	movingObject: null,
	slicingArray: null,
	routeName: 'menu',
	menu: null,

	actions: {
		createOrder: function() {
			var controller = this;
			this.store.createRecord('order', {
				cost: this.get('resultCost'),	
				day: this.get('menu.day')
			}).save().then(function(order){
				var orderFoods = [];
				controller.get('content').forEach(function(object){
					if (object.get('resultCost') > 0) {
						object.get('menuFoods').filter(function(menuFood){
							return menuFood.get('selected') > 0
						}).forEach(function(menuFood){
							orderFoods.addObject(controller.store.createRecord('orderFood', {
								food: menuFood.get('food'),
								order: order,
								count: menuFood.get('selected') 
							}).save());
						});
					}
				});
				Em.RSVP.all(orderFoods).then(function(){
					controller.transitionToRoute('order.confirm', order);
					controller.get('content').forEach(function(object){
						object.get('menuFoods').forEach(function(menuFood){
							menuFood.set('selected', 0);
						});
					});
				});
			});	
		},
		addCategory: function() {
			var controller = this;
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название',
				position: this.get('length') 
			}).save().then(function(category){
				controller.addObject(
					ProxyCategory.create({
						category:category
					})
				);	
			})			
		}
	}  
});
export default Em.ObjectController.extend({
	actions: {
		process: function() {
			this.get('orders').forEach(function(order){
				order.set('isProcessed', true);
				order.save();
			})
		}
	},
	sortingFoods: function() {
		this.get('orders').forEach(function(order){
			var sortedFoods = order.get('orderFoods').sortBy('food.foodCategory.position');
			order.set('sortedFoods', sortedFoods);	
		});
	}.observes('orders.@each.orderFoods.length').on('init')
});
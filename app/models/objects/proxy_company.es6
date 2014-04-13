export default Em.Object.extend({	
	isProcessed: function() {
		return this.get('orders').isEvery('isProcessed', true);
	}.property('orders.@each.isProcessed'),
	
	totalCost: function() {
 		return this.get('orders').reduce(function(previousValue, obj){
			return previousValue + obj.get("totalCost");
		}, 0);
	}.property('orders.@each.totalCost'),
	
	company: null, 
	orders: null
});
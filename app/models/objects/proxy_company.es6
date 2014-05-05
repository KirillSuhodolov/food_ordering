export default Em.Object.extend({	
	isProcessed: function() {
		return this.get('orders').isEvery('isProcessed', true);
	}.property('orders.@each.isProcessed'),
	
	totalCost: function() {
		return this.get('groupingFoods').reduce(function(previousValue, item){
            return item.get('totalCost') + previousValue
        }, 0) 
        +
        this.get('foodsWithoutGrouping').reduce(function(previousValue, item){
            return item.get('totalCost') + previousValue
        }, 0)  	
	}.property('groupingFoods.@each.totalCost', 'foodsWithoutGrouping.@each.totalCost'),

	company: null, 
	orders: null
});
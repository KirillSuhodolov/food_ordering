export default Em.ObjectController.extend({
	actions: {
		process: function() {
			this.get('orders').forEach(function(order){
				order.set('isProcessed', true);
				order.save();
			})
		}
	}
});
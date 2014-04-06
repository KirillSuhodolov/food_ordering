export default Em.ObjectController.extend({
	isAdmin: true,
	actions: {
		addFood: function(category) {
			this.store.createRecord('food', {foodCategory: category}).save()
		},
		addCategory: function() {
			this.store.createRecord('foodCategory').save()			
		}
	}  
});
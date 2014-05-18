export default Em.ArrayController.extend({
	actions: {
		addFoodGroup: function() {
			this.store.createRecord('foodGroup').save();	
		}
	}
})
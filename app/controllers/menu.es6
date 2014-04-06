export default Em.ObjectController.extend({
	isAdmin: true,
	actions: {
		addCategory: function() {
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название'
			}).save()			
		}
	}  
});
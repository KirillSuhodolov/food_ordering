export default Em.ObjectController.extend({
	isAdmin: true,
	actions: {
		addCategory: function() {
			var controller = this;
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название',
				position: this.get('foodCategories.length') 
			}).save().then(function(category){
				controller.get('foodCategories').addObject(
					Em.Object.create({
										category:category, 
										menuFoods: Ember.ArrayController.create({
											content: [],
										  sortProperties: ['food.position'],
										  sortAscending: true
										})
									})
					);	
			})			
		}
	}  
});
export default Em.ArrayController.extend({
	sortProperties: ['category.position'],
	sortAscending: true,		
	isAdmin: true,
	movingObject: null,
	slicingArray: null,
	menu: null,
	actions: {
		addCategory: function() {
			var controller = this;
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название',
				position: this.get('length') 
			}).save().then(function(category){
				controller.addObject(
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
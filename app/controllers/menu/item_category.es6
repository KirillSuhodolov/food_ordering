export default Em.ObjectController.extend({
	needs: ['menu'],
	isAllSelected: function() {
		return this.get('model.menuFoods').isEvery('isVisible', true)
	}.property('model.menuFoods.@each.isVisible'),
	isAllSelectedObserver: function() {
		this.get('model.menuFoods').setEach('isVisible', this.get('isAllSelected'));	
	}.observes('isAllSelected'),
	actions: {
		addFood: function() {
			var controller = this;
			this.store.createRecord('food', {
				foodCategory: this.get('model.category'),
				name: 'Кликните чтобы изменить название',
				composition: 'Кликните чтобы изменить состав',
				cost: 0,
				position: controller.get('model.menuFoods.length')
			}).save().then(function(food){
				controller.store.createRecord('menuFood', {
					menu: controller.get('controllers.menu.model'),
					food: food,
					isVisible: true
				}).save().then(function(menuFood){
					controller.get('model.menuFoods').addObject(menuFood);
				});	
			})
		}
	}  
});
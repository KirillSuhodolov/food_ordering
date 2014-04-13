export default Em.ObjectController.extend({
	init: function() {
		this._super();
		this.set('isAllSelected', this.get('model.menuFoods').isEvery('isVisible', true));
	},
	needs: ['menu'],
	isAdmin: Em.computed.alias('controllers.menu.isAdmin'), 
	
	isAllSelectedProxy: function() {
		return this.get('model.menuFoods').isEvery('isVisible', true);
	}.property('model.menuFoods.@each.isVisible'),
	
	isAllSelected: null,
	
	isAllSelectedObserver: function() {
		if (!this.get('isAllSelected') && !this.get('isAllSelectedProxy')) {
			this.get('model.menuFoods').setEach('isVisible', true);	
		} else if (this.get('isAllSelected') && this.get('isAllSelectedProxy')) {
			this.get('model.menuFoods').setEach('isVisible', false);	
		} else {
			this.get('model.menuFoods').setEach('isVisible', this.get('isAllSelected'));	
		}
	}.observes('isAllSelected'),

	isFirstCategory: function() {
		return this.get('controllers.menu.arrangedContent.firstObject.category') == this.get('model.category');	
	}.property('model.category.position', 'controllers.menu.@each.category.position').volatile(),

	isLastCategory: function() {
		return this.get('controllers.menu.arrangedContent.lastObject.category') == this.get('model.category');	
	}.property('model.category.position', 'controllers.menu.@each.category.position').volatile(),

	sort: function() {
		this.get('controllers.menu.arrangedContent').forEach(function (el, index) {
			el.get('category').set('position', index);
			if (el.get('category.isDirty')) {
				el.get('category').save();
			}
		});
	},

	actions: {
		incrementPosition: function() {
			this.get('model.category').incrementProperty('position');
			var index = this.get('controllers.menu.arrangedContent').indexOf(this.get('model'));
			this.get('controllers.menu.arrangedContent').objectAt(index + 1).get('category').decrementProperty('position');
		},
		decrementPosition: function() {
			this.get('model.category').decrementProperty('position');
			var index = this.get('controllers.menu.arrangedContent').indexOf(this.get('model'));
			this.get('controllers.menu.arrangedContent').objectAt(index - 1).get('category').incrementProperty('position');
		},
		delete: function() {
			var controller = this;
			if (this.get('model.menuFoods.length')) {
				alert('Нельзя удалить категорию с позициями!')
			} else {
				this.get('model.category').deleteRecord()
				this.get('model.category').save().then(function(){
					controller.get('controllers.menu').removeObject(controller.get('model'));

					controller.get('model.menuFoods').destroy();
					controller.get('model').destroy();
					controller.destroy();
					controller.sort();
				});	
			}
		},
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
					menu: controller.get('controllers.menu.menu'),
					food: food,
					isVisible: true
				}).save().then(function(menuFood){
					controller.get('model.menuFoods').addObject(menuFood);
				});	
			})
		}
	}  
});
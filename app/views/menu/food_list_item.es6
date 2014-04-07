export default Em.View.extend({
  templateName: 'menu/food_item',
  classNames: ['list-group-item'],
  tagName: 'li',
	isVisibleObserver: function() {
		if (this.get('content.isDirty')) {
			this.get('content').save();
		}
	}.observes('content.isVisible'),
	actions: {
		delete: function() {
			var view = this,
				content = view.get('content'),
				collection = view.get('controller.menuFoods.arrangedContent');
			this.get('content.food').deleteRecord();
			this.get('content.food').save().then(function(){
				view.get('content').deleteRecord();
				view.get('content').save().then(function(){
					collection.removeObject(content);
					collection.forEach(function (el, index) {
						el.get('food').set('position', index);
						if (el.get('food.isDirty')) {
							el.get('food').save();
						}
					});
				});	
			});			
		}
	}
})
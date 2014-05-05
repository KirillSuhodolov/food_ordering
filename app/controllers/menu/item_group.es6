export default Ember.ObjectController.extend({
	needs: ['menu'],
	init: function() {
		this._super();
		this.set('selection', []);
		// this.get('selection').addObjects(this.get('controllers.menu.foodCategories').filterBy('foodGroup', this.get('model')));
	},
	
	selectionDidChange: function() {
		var self = this;
		this.get('selection').forEach(function(item){
			if (item.get('foodGroup') != self.get('model')) {
				item.set('foodGroup', self.get('model')).save();
			}
		});	
	}.observes('selection.@each'),

	foodCategoryRelationObserver: function() {
		this.get('selection').setObjects(this.get('controllers.menu.foodCategories').filterBy('foodGroup', this.get('model')));
	}.observes('controllers.menu.foodCategories.@each.foodGroup').on('init'),

	actions: {
		delete: function() {
			this.get('selection').forEach(function(item){
				item.set('foodGroup', undefined).save();
			});		
			this.get('model').destroyRecord();
		}
	}
});
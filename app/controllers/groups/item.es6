export default Ember.ObjectController.extend({
	init: function() {
		this._super();
		this.set('selection', []);
        this.set('prevSelection', [])
	},
	
	selectionDidChange: function() {
		var self = this;

        this.get('prevSelection').removeObjects(this.get('selection')).forEach(function(item){
            item.set('foodGroup', null).save();
        });

        this.get('selection').forEach(function(item){
            if (item.get('foodGroup') != self.get('model')) {
                item.set('foodGroup', self.get('model')).save();
            }
        });
    }.observes('selection.length'),

    selectionWillChange: function() {
        this.get('prevSelection').setObjects(this.get('selection').copy());
    }.observesBefore('selection.length'),

    foodCategoryRelationObserver: function() {
		this.get('selection').setObjects(this.get('foodCategories').filterBy('foodGroup', this.get('model')));
	}.observes('foodCategories.@each.foodGroup').on('init'),

	actions: {
		delete: function() {
			this.get('selection').forEach(function(item){
				item.set('foodGroup', undefined).save();
			});		
			this.get('model').destroyRecord();
		}
	}
});
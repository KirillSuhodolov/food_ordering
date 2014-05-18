export default Em.ObjectController.extend({
	actions: {
		addItem: function() {
			this.incrementProperty('count')
		},
		removeItem: function() {
			this.decrementProperty('count')
		}
	},
	countObserver: function() {
		if (this.get('model.isDirty')) {
			this.get('model').save();
		}
	}.observes('model.count'),
	isEmpty: Em.computed.lt('model.count', 1),
});
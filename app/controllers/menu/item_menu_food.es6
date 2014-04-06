export default Em.ObjectController.extend({
	isVisibleObserver: function() {
		if (this.get('model.isDirty')) {
			this.get('model').save();
		}
	}.observes('isVisible') 
});
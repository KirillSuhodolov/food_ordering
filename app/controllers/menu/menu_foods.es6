export default Ember.ArrayController.extend({
	filteredContent: function() {
		if (this.get('proxyController.isAdmin')) {
			return this.get('arrangedContent');
		} else {
			return this.get('arrangedContent').filterBy('isVisible', true)									
		}
	}.property('content.@each.isVisible'),
	sortProperties: ['food.position'],
	sortAscending: true
});
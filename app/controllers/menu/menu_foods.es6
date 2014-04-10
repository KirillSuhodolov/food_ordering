export default Ember.ArrayController.extend({
	content: [],
	filteredContent: function() {
		// if (this.get('controller.isAdmin')) {
			return this.get('content');
		// } else {
			// return this.get('content').filterBy('isVisible', true)									
		// }
	}.property('content.@each.isVisible'),
	sortProperties: ['food.position'],
	sortAscending: true
});
export default Ember.ArrayController.extend({
	content: [],
	proxyController: null,
	filteredContent: function() {
		if (this.get('proxyController.isAdmin')) {
			return this.get('content');
		} else {
			return this.get('content').filterBy('isVisible', true)									
		}
	}.property('content.@each.isVisible'),
	sortProperties: ['food.position'],
	sortAscending: true
});
import PaginationMixin from 'app/mixins/pagination'

export default Em.ArrayController.extend(
	PaginationMixin,
	{
		sortProperties: ['isProcessed'],
		sortAscending: true,	
		routeName: 'orders',
		getFoodGroupsAndCategories: function() {
			this.set('foodGroups', this.store.find('foodGroup'));
			this.set('foodCategories', this.store.find('foodCategory'));
		}.observes('').on('init')
	});
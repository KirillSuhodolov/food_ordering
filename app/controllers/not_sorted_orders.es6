import PaginationMixin from 'app/mixins/pagination'

export default Em.ArrayController.extend(
	PaginationMixin,
	{
		sortProperties: ['user.company.id'],
		sortAscending: true,	
		routeName: 'notSortedOrders',
		getFoodGroupsAndCategories: function() {
			this.set('foodGroups', this.store.find('foodGroup'));
			this.set('foodCategories', this.store.find('foodCategory'));
		}.observes('').on('init')
	});
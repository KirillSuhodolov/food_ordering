import PaginationMixin from 'app/mixins/pagination'

export default Em.ArrayController.extend(
	PaginationMixin,
	{
		routeName: 'profile',		
	})
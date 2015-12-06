import Pagination from 'app/mixins/pagination-route'

export default Em.Route.extend(Pagination,
{
  modelName: 'order',
  authRedirectable: true,
	queryParams: {
		category: {
			refreshModel: true
		}
	},
	actions: {
		queryParamsDidChange: function() {
			this.refresh();	
		}
	} 	
});
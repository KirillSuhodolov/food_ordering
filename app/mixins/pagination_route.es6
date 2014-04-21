export default Em.Mixin.create({
	model: function(params, transition) {		
		var hasDate = params.date == 'undefined' ? false : !!params.date;
		var date = hasDate ? moment(params.date) : moment();	

		if ((date.isoWeekday() == 6) || (date.isoWeekday() == 7)) {
			params['date'] = date.add('w',1).startOf('isoWeek').format(config.SETTINGS.dateFormats.route);
			this.transitionTo(this.get('routeName'), {queryParams: {date: params['date'] }});		
		} else if (hasDate) {
			params['date'] = date.format(config.SETTINGS.dateFormats.route);
			return this.store.find(this.get('modelName'), params);			
		} else {
			params['date'] = date.format(config.SETTINGS.dateFormats.route);			
			this.transitionTo(this.get('routeName'), {queryParams: {date: params['date'] }});					
		}
	},
});
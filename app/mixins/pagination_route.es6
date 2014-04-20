export default Em.Mixin.create({
	model: function(params, transition) {		
		var hasDate;
		if (params.date == 'undefined') {
			hasDate = false;
		} else {
			hasDate = !!params.date;
		}
		var date = hasDate ? moment(params.date) : moment();	

		if ((date.isoWeekday() == 6) || (date.isoWeekday() == 7)) {
			params['date'] = date.add('w',1).startOf('isoWeek').format(config.SETTINGS.dateFormats.route);
		}
	
		if (hasDate) {
			return this.store.find(this.get('modelName'), params);
		} else { 
			transition.abort();
			this.replaceWith(this.get('routeName'), {queryParams: {date: params['date'] }});		
		}
	},
});
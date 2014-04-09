export default Em.Mixin.create({
	queryParams: ['date'],
	date: moment().format(config.SETTINGS.dateFormats.route),
	
	routeName: undefined,

	resultCost: function() {
		return this.get('content').reduce(function(previousValue, obj){
			return previousValue + obj.get("resultCost");
		}, 0);		
	}.property('@each.resultCost'),

	calendarFormat: function() {
		return config.SETTINGS.dateFormats.calendar
	}.property(''),

	prev: function() {
		var date = moment(this.get('date'));	
		return date.subtract('w',1).startOf('isoWeek').add('d', 4).format(config.SETTINGS.dateFormats.route);
	}.property('date'),
	
	next: function() {
		var date = moment(this.get('date'));	
		return date.add('w',1).startOf('isoWeek').format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	monday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 1 ) {
			date = date.startOf('isoWeek').add('d', 0); 
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	tuesday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 2 ) {
			date = date.startOf('isoWeek').add('d', 1);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	wednesday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 3 ) {
			date = date.startOf('isoWeek').add('d', 2);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	thursday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 4 ) {
			date = date.startOf('isoWeek').add('d', 3);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'),

	friday: function() {
		var date = moment(this.get('date'));	
		if (date.isoWeekday() != 5 ) {
			date = date.startOf('isoWeek').add('d', 4);
		}
		return date.format(config.SETTINGS.dateFormats.route);
	}.property('date'), 

});
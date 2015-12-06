export default Em.ObjectController.extend({
	period: moment().format(config.SETTINGS.dateFormats.period),

	queryParams: ['period'],
  
	today: moment().format(config.SETTINGS.dateFormats.route),

  monthFormat: function() {
		return config.SETTINGS.dateFormats.onlyMonth
	}.property(''),

  nextMonth: function() {
    var date = moment(this.get('period')),
        month = date.month(),
        year = date.year();
    if (month == 11) {
           year++;
           month = -1;
    }
    return moment([year, month + 1]).format(config.SETTINGS.dateFormats.period)
  }.property('period'),

  prevMonth: function() {
    var date = moment(this.get('period')),
        month = date.month(),
        year = date.year();
    if (!month) {
        year--;
        month = 12;
    }
    return moment([year, month - 1]).format(config.SETTINGS.dateFormats.period)
  }.property('period')
});
export default Em.Mixin.create({
  init: function() {
    this._super();
    this.set('date', null);
  },
  queryParams: ['date'],

  routeName: undefined,

  calendarFormat: function() {
    return config.SETTINGS.dateFormats.calendar
  }.property(''),

  timeFormat: function() {
    return config.SETTINGS.dateFormats.time
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
  }.property('date')
});

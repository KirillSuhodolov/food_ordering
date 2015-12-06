var CalendarDayView = Em.View.extend({
    classNames: ['calendar-day', 'day'],
    classNameBindings: ['active'],
    active: function() {
        return this.get('dayDate') == this.get('controller.today');
    }.property('dayDate'),
    templateName: 'calendar/day',
    dayDate: null,
    day: function() {
        return moment(this.get('dayDate')).format(config.SETTINGS.dateFormats.onlyDay)
    }.property('dayDate')
});

var CalendarEmptyDayView = Em.View.extend({
    classNames: ['calendar-day', 'empty'],
    templateName: 'calendar/empty'
});

export default Em.ContainerView.extend({
    controllerObserver: function() {
        this.removeAllChildren();
        this.rerender();
    }.observes('controller.period'),
    classNames: ['calendar-month'],
    didInsertElement: function() {
        var date = moment(this.get('controller.period')),
            daysInWeek = 7,
            year = date.year(),
            month = date.month(),
            daysInMonth = date.daysInMonth(),
            firstDay = moment([year, month, 1]).isoWeekday(),
            lastDay = moment([year, month + 1, 0]).isoWeekday(),
            dayCounter = 1,
            emptyDaysBeforeCount = firstDay - 1,
            emptyDaysAfterCount = daysInWeek - lastDay;

        for(emptyDaysBeforeCount; emptyDaysBeforeCount > 0; emptyDaysBeforeCount-- ) {
            this.pushObject(CalendarEmptyDayView.create({}));
        }

        for(daysInMonth; daysInMonth > 0; daysInMonth-- ) {
            this.pushObject(CalendarDayView.create({
                dayDate: moment([year, month, dayCounter++]).format(config.SETTINGS.dateFormats.route)
            }));
        }

        for(emptyDaysAfterCount; emptyDaysAfterCount > 0; emptyDaysAfterCount-- ) {
            this.pushObject(CalendarEmptyDayView.create({}))
        }
        this._super();
    }
});
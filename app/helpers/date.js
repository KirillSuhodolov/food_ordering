Ember.Handlebars.registerBoundHelper('date', function(value, format) {
    if (value)
        return moment(value).format(format);
    else
        return '-';
});
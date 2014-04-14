export default DS.Model.extend({
  day: DS.attr(),
  available: DS.attr(),
  menuFoods: DS.hasMany('menuFood'),

  isAvailable: function() {
  	return moment().format() < moment(this.get('available')).format()
  }.property('available').volatile()
});
export default DS.Model.extend({
  day: DS.attr(),
  available: DS.attr(),
  menuFoods: DS.hasMany('menuFood')
});
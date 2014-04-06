export default DS.Model.extend({
  day: DS.attr('date'),
  available: DS.attr('date'),
  menuFoods: DS.hasMany('menuFood')
});

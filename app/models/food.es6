export default DS.Model.extend({
  name: DS.attr('string'),
  composition: DS.attr('string'),
  cost: DS.attr(),
  foodCategory: DS.belongsTo('foodCategory'),
  orders: DS.hasMany('order'),
  menuFoods: DS.hasMany('menuFood')
});
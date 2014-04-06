export default DS.Model.extend({
  name: DS.attr('string'),
  foods: DS.hasMany('food'),
  foodGroup: DS.belongsTo('foodGroup')
});

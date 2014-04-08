export default DS.Model.extend({
  comment: DS.attr('string'),
  user: DS.belongsTo('user'),
  foods: DS.hasMany('food'),
  cost: DS.attr('number')
});
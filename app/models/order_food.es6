export default DS.Model.extend({
  food: DS.belongsTo('food'),
  order: DS.belongsTo('order'),
  count: DS.attr('number'),
});
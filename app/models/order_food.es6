export default DS.Model.extend({
  food: DS.belongsTo('food'),
  order: DS.belongsTo('order'),
  count: DS.attr('number'),
  cost: DS.attr('number'),
  totalCost: function() {
  	return this.get('cost') * this.get('count');
  }.property('cost', 'count')
});
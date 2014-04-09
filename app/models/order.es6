export default DS.Model.extend({
  comment: DS.attr('string'),
  user: DS.belongsTo('user'),
  foods: DS.hasMany('food'),
  orderFoods: DS.hasMany('orderFood'),
  isProcessed: DS.attr('boolean'),
  day: DS.attr(),
  totalCost: function() {
 		return this.get('orderFoods').reduce(function(previousValue, obj){
 			return previousValue + obj.get("totalCost");
 		}, 0);
  }.property('orderFoods.@each.totalCost')
});
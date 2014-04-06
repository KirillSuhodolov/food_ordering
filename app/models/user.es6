export default DS.Model.extend({
  company: DS.belongsTo('company'),
  orders: DS.hasMany('order')
});
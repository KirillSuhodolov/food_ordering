export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  users: DS.belongTo('user')
});

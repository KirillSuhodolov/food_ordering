export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  users: DS.hasMany('user'),
  position: DS.attr('number'),
  isSeparated: Em.computed.equal('id', '1')
});

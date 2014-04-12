export default DS.Model.extend({
  company: DS.belongsTo('company'),
  orders: DS.hasMany('order'),
  email: DS.attr(), 
  name: DS.attr(),
  phone: DS.attr(),
  address: DS.attr(),
  isSubscribe: DS.attr(), 
  position: DS.attr(), 
  status: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  isAdmin: Em.computed.equal('status', 'admin'),
  greeting: function() {
    return this.get('name') || this.get('email');
  }.property('name', 'email')
});
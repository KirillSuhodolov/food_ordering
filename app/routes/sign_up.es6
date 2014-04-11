export default Em.Route.extend({
  renderTemplate: function() {
    this.render('auth/sign_up')
  },
  model: function() {
    return this.get('store').createRecord('user');
  }
});
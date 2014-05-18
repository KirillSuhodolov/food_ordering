export default Ember.Route.extend({
  renderTemplate: function() {
    this.render('auth/sign_in')
  },
  setupController: function(controller, model) {
    this._super(controller, model);
    if (this.get('auth.userId')) {
        this.transitionTo('menu');
    }
  }
});

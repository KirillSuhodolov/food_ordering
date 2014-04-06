var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.resource('menu', function() {
    this.route('signIn', {path: 'sign-in'});
    this.route('signUp', {path: 'sign-up'});
    this.route('order', {path: 'order'});
  });
  this.resource('orders');
  this.resource('clients');
  this.resource('profile');
});

export default Router;

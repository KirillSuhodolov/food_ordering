var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.resource('menu');
  this.resource('signIn', {path: 'sign-in'});
  this.resource('signUp', {path: 'sign-up'});
  this.resource('order', {path: 'order/:order_id'}, function(){
  	this.route('confirm')
  });
  this.resource('orders');
  this.resource('clients');
  this.resource('profile');
  this.resource('calendar');
  this.resource('recoverPassword', {path: 'recover-password'});
});

export default Router;

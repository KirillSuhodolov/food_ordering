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
  this.resource('settings');
  this.resource('calendar');

  this.resource('recoverPassword', {path: 'recover-password'});
  this.resource('sendRecoverInstructions', {path: 'send-recover-instructions'});

});

export default Router;

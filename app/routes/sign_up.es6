export default Em.Route.extend({
  renderTemplate: function() {
    this.render('auth/sign_up')
  },
  model: function() {
    return this.get('store').createRecord('user');
  },
  setupController: function(controller, model) {
  	this._super(controller, model);
  	this.store.find('company').then(function(companies){
  		var firstObject = companies.findBy('id', '1');
	  	controller.set('companies', companies.removeObject(firstObject));
  	});
  }
});
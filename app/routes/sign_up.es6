export default Em.Route.extend({
    renderTemplate: function() {
        this.render('auth/sign_up')
    },
    model: function() {
        return this.get('store').createRecord('user', {isSubscribe: false});
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        if (this.get('auth.userId')) {
            this.transitionTo('menu');
        }
    }
});

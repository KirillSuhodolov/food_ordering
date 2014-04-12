export default Em.Route.extend({
    actions: {
           signOut: function() {
            this.auth.signOut().then(function() { window.location.reload(true); });
        }
    }
});
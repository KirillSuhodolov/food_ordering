export default Em.ObjectController.extend({
    needs: ['menu'],
    actions: {
        save: function() {
            var controller = this,
                model = this.get('model');

            if (model.get('isDirty')) {
                model.save().then(function(){
                    controller.transition()
                });
            } else {
                controller.transition()
            }
        }
    },

    transition: function() {
        var menu = this.get('controllers.menu');
        this.transitionToRoute('menu', {queryParams: {date: menu.get('date') }});
    }
});

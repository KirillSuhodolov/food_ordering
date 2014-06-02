export default Em.ObjectController.extend({
	needs: ['menu'],
	actions: {
		save: function() {
			var controller = this,
                menu = this.get('controllers.menu');

                this.get('model').save().then(function(){
				controller.transitionToRoute('menu', {queryParams: {date: menu.get('date') }});
            });
		}
	}	
});
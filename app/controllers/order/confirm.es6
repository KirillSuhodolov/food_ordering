export default Em.ObjectController.extend({
	needs: ['menu'],
	actions: {
		save: function() {
			var controller = this;
			this.get('model').save().then(function(){
				controller.transitionToRoute('menu');
			});
		}
	}	
});
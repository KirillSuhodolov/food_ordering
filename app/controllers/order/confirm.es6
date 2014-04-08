export default Em.ObjectController.extend({
	actions: {
		save: function() {
			var controller = this;
			this.get('model').save().then(function(){
				controller.transitionToRoute('menu');
			});
		}
	}	
});
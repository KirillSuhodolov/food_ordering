export default Em.ObjectController.extend({
	isDirty: function() {
		return this.get('orderFoods').isAny('isDirty', true);	
	}.property('orderFoods.@each.isDirty'),

	actions: {
		delete: function() {
			var parentController = this.get('parentController'),
					model = this.get('model');
			model.destroyRecord().then(function(){
				parentController.get('content').removeObject(model);		
			});
		}
	}
});
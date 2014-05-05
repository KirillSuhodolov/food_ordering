export default Em.ObjectController.extend({
	isDirty: function() {
		return this.get('orderFoods').isAny('isDirty', true);	
	}.property('orderFoods.@each.isDirty'),

	actions: {
		rollback: function() {
			this.get('orderFoods').forEach(function(item){
				item.rollback();
			});	
		},
		save: function() {
			this.get('orderFoods').forEach(function(item){
				if (item.get('isDirty')) {
					item.save();
				}
			});	
		}
	}
});
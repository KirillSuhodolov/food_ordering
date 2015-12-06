export default Em.ObjectController.extend({
	needs: ['clients'],
	actions: {
		delete: function() {
			var model = this.get('model'),
					firstCompany = this.get('controllers.clients').find(function(item){return item.get('id') == 1}),
				  users = model.get('users.content');
			model.destroyRecord().then(function(){
				users.setEach('company', firstCompany);
				users.invoke('save');	
			});	
		}
	}
})
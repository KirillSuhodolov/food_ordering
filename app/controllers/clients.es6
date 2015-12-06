export default Em.ArrayController.extend({
	sortProperties: ['position'],
	sortAscending: true,
	actions: {
		addCompany: function() {
			this.store.createRecord('company', {
				name: 'Кликните чтобы изменить название',
				address: 'Кликните чтобы изменить адрес',
				position: this.get('length') - 1 
			}).save();
		}
	}  
});
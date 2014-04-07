export default Em.ArrayController.extend({
	sortProperties: ['category.position'],
	sortAscending: true,		
	isAdmin: true,
	movingObject: null,
	slicingArray: null,
	queryParams: ['date'],
	menu: null,
	date: function() {
		return this.get('currentDate').format('YYYY-MM-DD')
	}.property('currentDate'),
	
	prev: function() {
		return this.get('currentDate').add('d', 1).format('YYYY-MM-DD')
	}.property(''),
	
	next: function() {
		return this.get('currentDate').add('d', 1).format('YYYY-MM-DD')
	}.property(''),

	monday: function() {
		return this.get('currentDate').add('d', 1).format('YYYY-MM-DD')
	}.property(''),

	tuesday: function() {
		return this.get('currentDate').add('d', 2).format('YYYY-MM-DD')
	}.property(''),

	wednesday: function() {
		return this.get('currentDate').add('d', 3).format('YYYY-MM-DD')
	}.property(''),

	thursday: function() {
		return this.get('currentDate').add('d', 4).format('YYYY-MM-DD')
	}.property(''),

	friday: function() {
		return this.get('currentDate').add('d', 5).format('YYYY-MM-DD')
	}.property(''),
	currentDate: moment(), 
	actions: {
		addCategory: function() {
			var controller = this;
			this.store.createRecord('foodCategory', {
				name: 'Кликните чтобы изменить название',
				position: this.get('length') 
			}).save().then(function(category){
				controller.addObject(
					Em.Object.create({
										category:category, 
										menuFoods: Ember.ArrayController.create({
											content: [],
										  sortProperties: ['food.position'],
										  sortAscending: true
										})
									})
					);	
			})			
		}
	}  
});
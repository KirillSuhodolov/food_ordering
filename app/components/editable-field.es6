export default Em.Component.extend({
	isActive: false,
	isText: false,
	field: null,
	model: null,
	classNames: ['editable-field'],
	click: function(e) {
		if ($(e.target).hasClass('unactive-editable')) {
			this.set('isActive', true);
		}
	},
	isActiveObserver: function() {
		var component = this;
		if (this.get('isActive')) {
			this.$('.active-editable').show();
			this.$('.unactive-editable').hide();
			this.$('.editable-field').focus();
			this.$('.editable-field').on('blur', function(){
				component.set('isActive', false);	
			});
		} else {
			this.$('.editable-field').blur();
			this.$('.active-editable').hide();
			this.$('.unactive-editable').show();
			if (this.get('model.isDirty')) {
				this.get('model').save();
			}
		}
 	}.observes('isActive')
});
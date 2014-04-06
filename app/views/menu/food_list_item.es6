export default Em.View.extend({
  templateName: 'menu/food_item',
  classNames: ['list-group-item'],
  tagName: 'li',
	isVisibleObserver: function() {
		if (this.get('content.isDirty')) {
			this.get('content').save();
		}
	}.observes('content.isVisible')
})
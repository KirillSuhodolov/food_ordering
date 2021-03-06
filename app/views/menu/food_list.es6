import SortableList from 'app/views/sortable-list'
import ItemView from 'app/views/sortable-list-item'

export default SortableList.extend({
  positionField: 'position',
  includedModel: 'food',
  sortingArray: 'menuFoods',
  handle: '.drag-handler',
  itemViewClass: ItemView.extend({
    templateName: 'menu/food_item', 
    isAdmin: Em.computed.alias('controller.isAdmin'),

    isVisibleObserver: function() {
      if (this.get('content.isDirty')) {
        this.get('content').save();
      }
    }.observes('content.isVisible'),    

    // isAdminOrIsVisible: function() {
    //   return this.get('isAdmin') || this.get('content.isVisible');
    // }.property('isAdmin', 'content.isVisible'),
    
    isEmpty: Em.computed.lt('content.selected', 1),
    actions: {
      addToCard: function() {
        this.get('content').incrementProperty('selected');
      },
      removeFromCard: function() {
        this.get('content').decrementProperty('selected');
      },
      delete: function() {
        var view = this,
        content = view.get('content'),
        collection = view.get('controller.menuFoods');
        this.get('content.food').deleteRecord();
        this.get('content.food').save().then(function(){
          view.get('content').deleteRecord();
          view.get('content').save().then(function(){
            collection.removeObject(content);
            collection.get('arrangedContent').forEach(function (el, index) {
              el.get('food').set('position', index);
              if (el.get('food.isDirty')) {
                el.get('food').save();
              }
            });
          }); 
        });     
      }
    }
  }),  
  didInsertElement: function() {
    if (this.get('controller.isAdmin')) {
      this._super();   
    }
  },
  onRemove: function(object) {
    object.set('foodCategory', null); 
  },
  onReceive: function(object) {
    object.set('foodCategory', this.get('controller.category'));
  }
});
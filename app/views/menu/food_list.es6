export default Em.CollectionView.extend({
  positionField: 'food.position',
  startIndex:0,
  cursor: 'move',
  classNames: ['list-group'],
  tagName: 'ul',
  newCollection: null,
  emptyView: Ember.View.extend({
    classNames: ['list-group-item empty'],
  	tagName: 'li',
  }),
  didInsertElement: function() {
    var scope = this;
		this._super();
    this.$().sortable({
      connectWith: ".list-group",
      placeholder: "bg-warning placeholder",
      cursor: scope.get('cursor'),
      start:function (event, ui) {
          scope.set('startIndex', ui.item.index());
		      scope.set('newCollection', scope.get('controller.menuFoods'));
      },
      stop:function (event, ui) {
      	  var objects = scope.get('newCollection'),
              startIndex = scope.get('startIndex'),
              currentIndex = ui.item.index(),
              result = [],
              currentObject = objects.objectAt(startIndex);
          if (startIndex < currentIndex) {
              var beforeStart = objects.slice(0, startIndex),
                  afterStart = objects.slice(startIndex + 1, currentIndex + 1),
                  afterAll = objects.slice(currentIndex + 1, objects.get('length'));
              result.addObjects(beforeStart).addObjects(afterStart).addObject(currentObject).addObjects(afterAll)
          } else if (startIndex > currentIndex) {
              var beforeCurrent = objects.slice(0, currentIndex),
                  afterCurrent = objects.slice(currentIndex, startIndex),
                  afterAll = objects.slice(startIndex + 1, objects.get('length'));
              result.addObjects(beforeCurrent).addObject(currentObject).addObjects(afterCurrent).addObjects(afterAll)
          }

          result.forEach(function (el, index) {
              el.set(scope.positionField, index);
              if (el.get('food.isDirty')) {
              	el.get('food').save();
              }
          });
      },
      receive: function(event, ui) {
        var objects = scope.get('controller.menuFoods'),
          startIndex = scope.get('startIndex'),
          currentObject = objects.objectAt(startIndex), 
					newCategory = scope.get('controller.parentController.foodCategories').findBy('category.id', ui.item.parent().parent().data('category').toString()),        
        	currentCategory = scope.get('controller.content');

        	scope.set('newCollection', newCategory.get('menuFoods'));
        	currentObject.get('food').set('foodCategory', newCategory.get('category'));	
        	currentCategory.get('menuFoods').removeObject(currentObject);
        	currentCategory.get('menuFoods').forEach(function(item, index){
        		item.set('food.position', index);
        		if (item.get('food.isDirty')) {
        			item.save()
        		}
        	});	
      },
    }).disableSelection(); 


  }
});
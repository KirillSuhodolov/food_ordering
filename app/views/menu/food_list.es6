export default Em.CollectionView.extend({
  positionField: 'position',
  startIndex:0,
  cursor: 'move',
  classNames: ['list-group'],
  tagName: 'ul',
  emptyView: Ember.View.extend({
    classNames: ['list-group-item empty'],
  	tagName: 'li',
  }),
  isRemoving: false,
  didInsertElement: function() {
    var scope = this;
		this._super();
    this.$().sortable({
      connectWith: ".list-group",
      placeholder: "bg-warning placeholder",
      cursor: scope.get('cursor'),
      cancel: ".empty",
      start:function (event, ui) {
          scope.set('startIndex', ui.item.index());
		  },
      stop:function (event, ui) {
        if (!scope.get('isRemoving')) {
      	  var objects = scope.get('controller.menuFoods'),
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
            el.get('food').set(scope.positionField, index);
            if (el.get('food.isDirty')) {
            	el.get('food').save();
            }
          });
        } 
        scope.set('isRemoving', false); 
      },
      remove: function(event, ui) {
        var objects = scope.get('controller.menuFoods'),
          currentObject = objects.objectAt(scope.get('startIndex')); 
          
          currentObject.get('food').set('foodCategory', null); 
          scope.get('controller.parentController').set('movingObject', currentObject);
          scope.get('controller.parentController').set('slicingArray', objects);

          scope.set('isRemoving', true);
      },
      receive: function(event, ui) {
        var objects = scope.get('controller.menuFoods'),
          currentIndex = ui.item.index(),
          currentObject = scope.get('controller.parentController.movingObject'), 
        	slicingArray = scope.get('controller.parentController.slicingArray'); 

          currentObject.get('food').set('foodCategory', scope.get('controller.category'));	
          currentObject.get('food').set('position', currentIndex);  
          currentObject.get('food').save().then(function(){
            objects.addObject(currentObject);
            objects.forEach(function (el, index) {
              el.get('food').set(scope.positionField, index);
              if (el.get('food.isDirty')) {
                el.get('food').save();
              }
            });
          });

          slicingArray.removeObject(currentObject);

          if (slicingArray.get('length')) {
            slicingArray.forEach(function(item, index){
              item.get('food').set(scope.positionField, index);
              if (item.get('food.isDirty')) {
                item.get('food').save()
              }
            });
          } else {
            ui.item.remove();
          }
          
          scope.get('controller.parentController').set('movingObject', null)
      },
    }).disableSelection(); 
  }
});
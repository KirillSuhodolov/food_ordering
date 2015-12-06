import ProxyCategory from 'app/models/objects/proxy-category'
import PaginationMixin from 'app/mixins/pagination'
import MenuFoods from 'app/controllers/menu/menu-foods'

export default Em.ArrayController.extend(
  PaginationMixin,
  {
    sortProperties: ['category.position'],
    sortAscending: true,
    isAdmin: Em.computed.alias('auth.user.isAdmin'),
    movingObject: null,
    slicingArray: null,
    routeName: 'menu',
    menu: null,
    needs: ['application'],

    dateObserver: function() {
      if (Em.isEmpty(this.get('date')) && this.get('menu.day')) {
        this.set('date', this.get('menu.day'));
      }
    }.observes('date', 'menu.day').on('init'),

    resultCost: function() {
      return this.get('content').reduce(function(previousValue, obj){
        return previousValue + obj.get("resultCost");
      }, 0);
    }.property('@each.resultCost'),

    menuAvailableObserver: function() {
      if (this.get('menu.isDirty')) {
        this.get('menu').save();
      }
    }.observes('menu.available'),

    actions: {
      createOrder: function() {
        var controller = this,
          user = this.get('auth.user');
        this.store.createRecord('order', {
          user: user,
          cost: this.get('resultCost'),
          day: this.get('menu.day')
        }).save().then(function(order){
          var orderFoods = [];
          controller.get('content').forEach(function(object){
            if (object.get('resultCost') > 0) {
              object.get('menuFoods').filter(function(menuFood){
                return menuFood.get('selected') > 0
              }).forEach(function(menuFood){
                orderFoods.addObject(controller.store.createRecord('orderFood', {
                  food: menuFood.get('food'),
                  order: order,
                  count: menuFood.get('selected')
                }).save());
              });
            }
          });
          Em.RSVP.all(orderFoods).then(function(){
            controller.get('controllers.application').set('order', order);
            if (user) {
              controller.transitionToRoute('order.confirm', order);
            } else {
              controller.transitionToRoute('signIn');
            }
            controller.get('content').forEach(function(object){
              object.get('menuFoods').forEach(function(menuFood){
                menuFood.set('selected', 0);
              });
            });
          });
        });
      },
      addCategory: function() {
        var controller = this;
        this.store.createRecord('foodCategory', {
          name: 'Кликните чтобы изменить название',
          position: this.get('length')
        }).save().then(function(category){
          var menuFoods = MenuFoods.create({
              proxyController: controller
            }),
            proxyCategory = ProxyCategory.create({
              category:category,
              menuFoods: menuFoods
            });
          controller.addObject(proxyCategory);
        })
      }
    }
  });

import FoodCategoriesNewRoute from 'app/routes/food-categories/new';

var route, store;

module('Unit - FoodCategoriesNewRoute', {
  setup: function(){
    store = {};

    route = FoodCategoriesNewRoute.create({
      store: store
    });
  },
  teardown: function(){
    Ember.run(route, 'destroy');
  }
});

test('it exist', function(){
  expect(2);

  ok(route);
  ok(route instanceof Ember.Route);
});

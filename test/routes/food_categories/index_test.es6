import FoodCategoriesIndexRoute from 'app/routes/food-categories/index';

var route, store;

module('Unit - FoodCategoriesIndexRoute', {
  setup: function(){
    store = {};

    route = FoodCategoriesIndexRoute.create({
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

import FoodCategoriesEditRoute from 'app/routes/food-categories/edit';

var route, store;

module('Unit - FoodCategoriesEditRoute', {
  setup: function(){
    store = {};

    route = FoodCategoriesEditRoute.create({
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

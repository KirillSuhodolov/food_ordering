import FoodGroupsIndexRoute from 'app/routes/food-groups/index';

var route, store;

module('Unit - FoodGroupsIndexRoute', {
  setup: function(){
    store = {};

    route = FoodGroupsIndexRoute.create({
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

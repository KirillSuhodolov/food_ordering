import FoodGroupsNewRoute from 'app/routes/food-groups/new';

var route, store;

module('Unit - FoodGroupsNewRoute', {
  setup: function(){
    store = {};

    route = FoodGroupsNewRoute.create({
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

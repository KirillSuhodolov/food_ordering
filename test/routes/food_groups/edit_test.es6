import FoodGroupsEditRoute from 'app/routes/food-groups/edit';

var route, store;

module('Unit - FoodGroupsEditRoute', {
  setup: function(){
    store = {};

    route = FoodGroupsEditRoute.create({
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

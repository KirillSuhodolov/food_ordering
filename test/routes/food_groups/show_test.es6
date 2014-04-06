import FoodGroupsShowRoute from 'app/routes/food-groups/show';

var route, store;

module('Unit - FoodGroupsShowRoute', {
  setup: function(){
    store = {};

    route = FoodGroupsShowRoute.create({
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

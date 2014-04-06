import FoodsNewRoute from 'app/routes/foods/new';

var route, store;

module('Unit - FoodsNewRoute', {
  setup: function(){
    store = {};

    route = FoodsNewRoute.create({
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

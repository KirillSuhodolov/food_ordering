import FoodsIndexRoute from 'app/routes/foods/index';

var route, store;

module('Unit - FoodsIndexRoute', {
  setup: function(){
    store = {};

    route = FoodsIndexRoute.create({
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

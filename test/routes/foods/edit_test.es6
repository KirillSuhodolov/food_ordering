import FoodsEditRoute from 'app/routes/foods/edit';

var route, store;

module('Unit - FoodsEditRoute', {
  setup: function(){
    store = {};

    route = FoodsEditRoute.create({
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

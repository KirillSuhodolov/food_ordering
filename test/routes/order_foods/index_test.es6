import OrderFoodsIndexRoute from 'app/routes/order-foods/index';

var route, store;

module('Unit - OrderFoodsIndexRoute', {
  setup: function(){
    store = {};

    route = OrderFoodsIndexRoute.create({
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

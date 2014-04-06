import OrderFoodsShowRoute from 'app/routes/order-foods/show';

var route, store;

module('Unit - OrderFoodsShowRoute', {
  setup: function(){
    store = {};

    route = OrderFoodsShowRoute.create({
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

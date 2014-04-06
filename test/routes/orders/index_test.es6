import OrdersIndexRoute from 'app/routes/orders/index';

var route, store;

module('Unit - OrdersIndexRoute', {
  setup: function(){
    store = {};

    route = OrdersIndexRoute.create({
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

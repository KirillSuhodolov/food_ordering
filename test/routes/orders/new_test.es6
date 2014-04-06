import OrdersNewRoute from 'app/routes/orders/new';

var route, store;

module('Unit - OrdersNewRoute', {
  setup: function(){
    store = {};

    route = OrdersNewRoute.create({
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

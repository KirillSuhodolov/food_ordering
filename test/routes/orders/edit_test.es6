import OrdersEditRoute from 'app/routes/orders/edit';

var route, store;

module('Unit - OrdersEditRoute', {
  setup: function(){
    store = {};

    route = OrdersEditRoute.create({
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

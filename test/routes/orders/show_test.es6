import OrdersShowRoute from 'app/routes/orders/show';

var route, store;

module('Unit - OrdersShowRoute', {
  setup: function(){
    store = {};

    route = OrdersShowRoute.create({
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

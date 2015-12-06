import OrderFoodsNewRoute from 'app/routes/order-foods/new';

var route, store;

module('Unit - OrderFoodsNewRoute', {
  setup: function(){
    store = {};

    route = OrderFoodsNewRoute.create({
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

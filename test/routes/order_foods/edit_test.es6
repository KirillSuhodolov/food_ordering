import OrderFoodsEditRoute from 'app/routes/order-foods/edit';

var route, store;

module('Unit - OrderFoodsEditRoute', {
  setup: function(){
    store = {};

    route = OrderFoodsEditRoute.create({
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

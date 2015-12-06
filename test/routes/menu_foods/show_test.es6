import MenuFoodsShowRoute from 'app/routes/menu-foods/show';

var route, store;

module('Unit - MenuFoodsShowRoute', {
  setup: function(){
    store = {};

    route = MenuFoodsShowRoute.create({
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

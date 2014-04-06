import MenuFoodsNewRoute from 'app/routes/menu-foods/new';

var route, store;

module('Unit - MenuFoodsNewRoute', {
  setup: function(){
    store = {};

    route = MenuFoodsNewRoute.create({
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

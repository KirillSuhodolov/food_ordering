import MenuFoodsIndexRoute from 'app/routes/menu-foods/index';

var route, store;

module('Unit - MenuFoodsIndexRoute', {
  setup: function(){
    store = {};

    route = MenuFoodsIndexRoute.create({
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

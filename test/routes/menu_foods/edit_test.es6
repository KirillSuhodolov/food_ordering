import MenuFoodsEditRoute from 'app/routes/menu-foods/edit';

var route, store;

module('Unit - MenuFoodsEditRoute', {
  setup: function(){
    store = {};

    route = MenuFoodsEditRoute.create({
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

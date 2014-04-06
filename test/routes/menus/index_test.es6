import MenusIndexRoute from 'app/routes/menus/index';

var route, store;

module('Unit - MenusIndexRoute', {
  setup: function(){
    store = {};

    route = MenusIndexRoute.create({
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

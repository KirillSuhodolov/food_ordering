import MenusNewRoute from 'app/routes/menus/new';

var route, store;

module('Unit - MenusNewRoute', {
  setup: function(){
    store = {};

    route = MenusNewRoute.create({
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

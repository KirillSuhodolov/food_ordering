import MenusEditRoute from 'app/routes/menus/edit';

var route, store;

module('Unit - MenusEditRoute', {
  setup: function(){
    store = {};

    route = MenusEditRoute.create({
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

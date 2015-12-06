import MenusShowRoute from 'app/routes/menus/show';

var route, store;

module('Unit - MenusShowRoute', {
  setup: function(){
    store = {};

    route = MenusShowRoute.create({
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

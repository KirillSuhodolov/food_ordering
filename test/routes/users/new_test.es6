import UsersNewRoute from 'app/routes/users/new';

var route, store;

module('Unit - UsersNewRoute', {
  setup: function(){
    store = {};

    route = UsersNewRoute.create({
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

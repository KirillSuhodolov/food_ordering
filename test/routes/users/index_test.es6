import UsersIndexRoute from 'app/routes/users/index';

var route, store;

module('Unit - UsersIndexRoute', {
  setup: function(){
    store = {};

    route = UsersIndexRoute.create({
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

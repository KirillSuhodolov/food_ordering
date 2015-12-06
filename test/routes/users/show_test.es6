import UsersShowRoute from 'app/routes/users/show';

var route, store;

module('Unit - UsersShowRoute', {
  setup: function(){
    store = {};

    route = UsersShowRoute.create({
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

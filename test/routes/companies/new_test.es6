import CompaniesNewRoute from 'app/routes/companies/new';

var route, store;

module('Unit - CompaniesNewRoute', {
  setup: function(){
    store = {};

    route = CompaniesNewRoute.create({
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

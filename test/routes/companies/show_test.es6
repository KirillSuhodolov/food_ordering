import CompaniesShowRoute from 'app/routes/companies/show';

var route, store;

module('Unit - CompaniesShowRoute', {
  setup: function(){
    store = {};

    route = CompaniesShowRoute.create({
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

import CompaniesEditRoute from 'app/routes/companies/edit';

var route, store;

module('Unit - CompaniesEditRoute', {
  setup: function(){
    store = {};

    route = CompaniesEditRoute.create({
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

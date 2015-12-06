import CompaniesIndexRoute from 'app/routes/companies/index';

var route, store;

module('Unit - CompaniesIndexRoute', {
  setup: function(){
    store = {};

    route = CompaniesIndexRoute.create({
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

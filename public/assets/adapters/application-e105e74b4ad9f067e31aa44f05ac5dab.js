define("config/adapters/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = DS.ActiveModelAdapter.extend({
      namespace: 'api/v1'
    });
  });
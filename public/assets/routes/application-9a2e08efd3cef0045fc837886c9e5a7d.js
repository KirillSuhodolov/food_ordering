define("app/routes/application", 
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = Em.Route.extend({
        actions: {
               signOut: function() {
                this.auth.signOut().then(function() { window.location.reload(true); });
            }
        }
    });
  });
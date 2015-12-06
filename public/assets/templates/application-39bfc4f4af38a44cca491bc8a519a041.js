define('app/templates/application', ['exports'], function(__exports__){ __exports__.default = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("\n            Food Ordering\n            ");
  }

function program3(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n                <li>\n                	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "orders", options) : helperMissing.call(depth0, "link-to", "orders", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "notSortedOrders", options) : helperMissing.call(depth0, "link-to", "notSortedOrders", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                	");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "clients", options) : helperMissing.call(depth0, "link-to", "clients", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "groups", options) : helperMissing.call(depth0, "link-to", "groups", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n                ");
  return buffer;
  }
function program4(depth0,data) {
  
  
  data.buffer.push("\n                    Заказы для фасовки\n                    ");
  }

function program6(depth0,data) {
  
  
  data.buffer.push("\n                    Заказы для курьера\n                    ");
  }

function program8(depth0,data) {
  
  
  data.buffer.push("Клиенты");
  }

function program10(depth0,data) {
  
  
  data.buffer.push("Группировки");
  }

function program12(depth0,data) {
  
  
  data.buffer.push("Меню");
  }

function program14(depth0,data) {
  
  
  data.buffer.push("\n                <p class=\"navbar-text\">+375 29 11 22 33</p>\n            ");
  }

function program16(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n            <ul class=\"nav navbar-nav navbar-right edge-block\">\n                <li class=\"btn-group navbar-btn\">\n                  <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n                    ");
  stack1 = helpers._triageMustache.call(depth0, "auth.user.greeting", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" <span class=\"caret\"></span>\n                </button>\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                    ");
  stack1 = helpers.unless.call(depth0, "auth.user.isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    <li>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Настройки", "settings", options) : helperMissing.call(depth0, "link-to", "Настройки", "settings", options))));
  data.buffer.push("\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li> \n                        ");
  stack1 = helpers['if'].call(depth0, "auth.signedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(19, program19, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                    </li>\n                </ul>\n            </li>\n\n        </ul>\n        ");
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = '', helper, options;
  data.buffer.push("\n                    <li>\n                        ");
  data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Ваши заказы", "profile", options) : helperMissing.call(depth0, "link-to", "Ваши заказы", "profile", options))));
  data.buffer.push("\n                    </li>\n                    ");
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = '';
  data.buffer.push("\n                        <a href=\"#\" ");
  data.buffer.push(escapeExpression(helpers.action.call(depth0, "signOut", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data})));
  data.buffer.push(">\n                            Покинуть нас\n                        </a>\n                        ");
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = '', stack1, helper, options;
  data.buffer.push("\n        ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("btn btn-embossed btn-default navbar-btn navbar-right")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "signIn", options) : helperMissing.call(depth0, "link-to", "signIn", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n        ");
  return buffer;
  }
function program22(depth0,data) {
  
  
  data.buffer.push("Войти");
  }

  data.buffer.push("<nav class=\"navbar navbar-default block-embossed hidden-print\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
    'classNames': ("navbar-brand")
  },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu", options) : helperMissing.call(depth0, "link-to", "menu", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push(" \n        </div>\n        <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n                ");
  stack1 = helpers['if'].call(depth0, "auth.user.isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                <li>\n                    ");
  stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "menu", options) : helperMissing.call(depth0, "link-to", "menu", options));
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n                </li>\n            </ul>\n            ");
  stack1 = helpers.unless.call(depth0, "auth.user.isAdmin", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n            ");
  stack1 = helpers['if'].call(depth0, "auth.signedIn", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(21, program21, data),fn:self.program(16, program16, data),contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n</div>\n</nav>\n\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-10 col-lg-offset-1\">\n      ");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n    </div>\n  </div>\n</div>\n");
  return buffer;
  
}); });
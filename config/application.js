//= require jquery
//= require moment
//= require bootstrap
//= require jquery.mask
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.core
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.widget
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.mouse
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.position
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.draggable
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.droppable
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.sortable
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.slider
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.widget
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.tooltip
//= require ../vendor/assets/javascripts/jquery-ui/jquery.ui.effect

//= require ../vendor/assets/javascripts/flat-ui/jquery.ui.touch-punch.min
//= require ../vendor/assets/javascripts/flat-ui/bootstrap-select
//= require ../vendor/assets/javascripts/flat-ui/bootstrap-switch
//= require ../vendor/assets/javascripts/flat-ui/flatui-checkbox
//= require ../vendor/assets/javascripts/flat-ui/flatui-radio
//= require ../vendor/assets/javascripts/flat-ui/jquery.tagsinput
//= require ../vendor/assets/javascripts/flat-ui/jquery.placeholder
//= require ../vendor/assets/javascripts/bootstrap-datetimepicker

//= require environment
//= require ember-appkit

//= require ../vendor/assets/javascripts/ember-auth/ember-auth
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-request-jquery
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-response-json
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-strategy-token
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-session-cookie
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-module-ember-data
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-module-auth-redirectable
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-module-action-redirectable
//= require ../vendor/assets/javascripts/ember-auth/ember-auth-module-rememberable

//= require_self
//= require_tree ./adapters
//= require_tree ./serializers
//= require router
//= require_tree ../app
//= require_tree ./initializers

Em.Auth.RememberableAuthModule.reopen({
    recall: function (opts) {
        var token,
            self = this;
        if (null == opts)
            opts = {};
        if (!get$(get$(this, 'auth'), 'signedIn') && (token = this.retrieveToken())) {
            set$(this, 'fromRecall', true);
            opts.data || (opts.data = {});
            get$(opts, 'data')[get$(get$(this, 'config'), 'tokenKey')] = token;
            if (null != get$(get$(this, 'config'), 'endPoint')) {
                return get$(this, 'auth').signIn(get$(get$(this, 'config'), 'endPoint'), opts);
            } else {
                return get$(this, 'auth').signIn(opts).catch(function(error){
                    self.recall();
                    if (error.recall) {
                        console.log('relogin');
                    }
                });
            }
        } else {
            return new (get$(get$(Em, 'RSVP'), 'resolve'));
        }
    }
});

Em.Route.reopen({
    activate: function() {
        this._super();
        var $collapsedBlock = $('.navbar-header > button');
        if (!$collapsedBlock.hasClass('collapsed')) { $collapsedBlock.addClass('collapsed'); }
    }
});

Ember.Checkbox.reopen({
    didInsertElement: function() {
        this._super();
        this.$().checkbox();
    }
});

window.App = require('app').default.create();

window.App.Auth = Em.Auth.extend({
    request: 'jquery',
    response: 'json',
    strategy: 'token',
    session: 'cookie',

    modules: ['emberData', 'authRedirectable', 'actionRedirectable', 'rememberable'],

    signInEndPoint: '/api/sign_in',
    signOutEndPoint: '/api/sign_out',

    tokenKey: 'auth_token',
    tokenIdKey: 'user_id',
    tokenLocation: 'param',

    emberData: {
        userModel: 'user'
    },

    urlAuthenticatable: {
        params: [ 'email', 'password' ]
    },

    authRedirectable: {
        route: 'menu'
    },

    actionRedirectable: {
//        signInRoute: 'menu',
//        signInSmart: true,
        signInBlacklist: ['signIn', 'signUp'],
        signOutRoute: 'menu'
    },

    rememberable: {
        tokenKey: 'remember_token',
        period: 31,
        autoRecall: true
    }
});

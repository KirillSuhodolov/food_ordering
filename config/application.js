//= require jquery
//= require environment
//= require ember-appkit
//= require_self
//= require_tree ./adapters
//= require_tree ./serializers
//= require router
//= require_tree ../app
//= require_tree ./initializers

//= require moment
//= require bootstrap
//= require jquery.mask
//= require_tree ../vendor/assets/javascripts/jquery-ui
//= require_tree ../vendor/assets/javascripts/flat-ui

window.App = require('app').default.create();
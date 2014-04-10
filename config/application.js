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

Ember.Checkbox.reopen({
  didInsertElement: function() {
    this._super();
  	this.$().checkbox();
  }
});

window.App = require('app').default.create();
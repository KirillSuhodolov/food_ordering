export default Em.View.extend({
	didInsertElement: function() {
		this._super();
		// var view = this;
		// this.$('.time').mask('AB:CD', {
		// 	translation: {
		// 		'A': {
		// 			pattern: /[0-2]/
		// 		},
		// 		'B': {
		// 			pattern: /[0-9]/
		// 		},
		// 		'C': {
		// 			pattern: /[0-5]/
		// 		},				
		// 		'D': {
		// 			pattern: /[0-9]/
		// 		},
		// 	},
		// 	onKeyPress: function(cep){
		// 	  var mask = 'AB:CD';
		// 	  if ( cep[0] == 2 && cep[1] > 4 ) {
		// 	  	cep = cep.slice(0,1)
		// 	  }
		// 	  view.$('.time').val(cep);
		// 	}
		// });
		// this.$('.time').on('blur', function(){
		// 	var menu = view.get('controller.menu');
		// 	if (menu.get('isDirty')) { menu.save(); }
		// });

		this.$('.form_datetime').datetimepicker({
        language:  'ru',
        pickerPosition: 'bottom-left',
        weekStart: 1,
        todayBtn:  1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 1,
				forceParse: 0,
				maxView: 1,
				format: 'yyyy-MM-dd HH:ii'
				// initialDate: new Date()
    });
	}
});
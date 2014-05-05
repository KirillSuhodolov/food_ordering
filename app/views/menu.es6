export default Em.View.extend({
	didInsertElement: function() {
		this._super();

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
				format: 'yyyy-MM-dd hh:ii'
				// initialDate: new Date()
    	});

		this.$('.scrollTop-button').on('click', function(){
	    	$('body').animate({scrollTop: 0});
		})
	}
});
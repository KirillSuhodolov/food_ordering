export default Em.View.extend({
	didInsertElement: function() {
		this._super();
		$('.list-group').sortable({
      connectWith: ".list-group",
      placeholder: "list-group-item placeholder"
    }).disableSelection();	
	}
});
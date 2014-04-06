export default Em.CollectionView.extend({
  classNames: ['list-group'],
  tagName: 'ul',
  didInsertElement: function() {
    this._super();
    this.$().sortable({
      connectWith: ".list-group",
      placeholder: "bg-warning placeholder"
    }).disableSelection();  
  }
});
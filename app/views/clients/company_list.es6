import SortableList from 'app/views/sortable-list'
import ItemView from 'app/views/sortable-list-item'

export default SortableList.extend({
  positionField: 'position',
  includedModel: '',
  handle: '.drag-handler',
  sortingArray: 'users',
  itemViewClass: ItemView.extend({
    templateName: 'clients/clients_item'
  }),  
  onRemove: function(object) {
    object.set('company', null); 
  },
  onReceive: function(object) {
    object.set('company', this.get('controller.model'));
  }
});
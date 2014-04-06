export default DS.Model.extend({
  isVisible: DS.attr('boolean'),
  menu: DS.belongsTo('menu'),
  food: DS.belongsTo('food')
});

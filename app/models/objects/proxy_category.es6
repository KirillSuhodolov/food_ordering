import MenuFoods from 'app/controllers/menu/menu-foods'

export default Em.Object.extend({
	resultCost: function() {
		return this.get('menuFoods').reduce(function(previousValue, obj){
			return previousValue + obj.get("selected") * obj.get('food.cost');
		}, 0);	
	}.property('menuFoods.@each.selected'),
	menuFoods: MenuFoods.create()
});
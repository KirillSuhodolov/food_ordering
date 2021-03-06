import ProxyCompany from 'app/models/objects/proxy-company'
import Pagination from 'app/mixins/pagination-route'

export default Ember.Route.extend(Pagination,
    {
        modelName: 'order',
        authRedirectable: true,
        queryParams: {
            category: {
                refreshModel: true
            }
        },
        setupController: function(controller, model) {
            this.store.find('company').then(function(company){
                var ordersProxyArray = [],
                    foodGroups = controller.get('foodGroups');
                company.forEach(function(company){
                    var orders = model.filter(function(item){
                            return item.get('user.company') == company
                        }),
                        foodsWithoutGrouping = [],
                        orderFoods = [],
                        groupProxyObjects = [],
                        groupingFoods = [],
                        stackedGroups = [];

                    orders.forEach(function(order){
                        var scopeOrderFoods = [];
                        order.get('orderFoods.content').forEach(function(orderFood){
                    	    var currentFood = scopeOrderFoods.findBy('food', orderFood.get('food'));
                        	if (currentFood) {
                            currentFood.set('count', orderFood.get('count') + currentFood.get('count') );
                        	} else {
                            scopeOrderFoods.addObject(Em.Object.createWithMixins({
                                orderFood: orderFood,
                                count: orderFood.get('count'),
                                food: orderFood.get('food'),
                                totalCost: function() {
                                    return this.get('orderFood.cost') * this.get('count');
                                }.property('orderFoods.@each.cost', 'count')
                            }));
		                      }
                        });
                        
	                    foodGroups.forEach(function(group){
	                        groupProxyObjects.addObject({
	                            group: group,
	                            orderFoods: scopeOrderFoods.filterBy('food.foodCategory.foodGroup', group).sortBy('food.foodCategory.position')
	                        });
	                    });
                        orderFoods.addObjects(scopeOrderFoods);
                    });

                    orderFoods.filterBy('food.foodCategory.foodGroup', null).forEach(function(object){
                        var food = foodsWithoutGrouping.findBy('orderFoods.firstObject.food', object.get('food'));
                            
                        if (food) {
                            food.incrementProperty('count', object.get('count'));
                        } else {
                            foodsWithoutGrouping.addObject(Em.Object.createWithMixins({
                                count: object.get('count'),
                                orderFoods: [object.get('orderFood')],
                                totalCost: function() {
                                    var costs = this.get('orderFoods').reduce(function(previousValue, item){
                                            return item.get('cost') + previousValue
                                        }, 0),
                                        totalCost = costs * this.get('count');
                                    return totalCost;
                                }.property('orderFoods.@each.cost', 'count')
                            }));
                        }
                    });
                    
                    groupProxyObjects.forEach(function(object){
                        for(var i = object.orderFoods.length; i >= 0; i-- ) {
                            var orderFoods = object.orderFoods;

                            if (orderFoods.get('length')) {
                                var minObject = orderFoods.get('firstObject');
                                orderFoods.forEach(function(item) {
                                    if (item.get('count') < minObject.get('count')) { minObject = item }
                                });
                                groupingFoods.addObject(Em.Object.createWithMixins({
                                    count: minObject.get('count'),
                                    orderFoods: orderFoods.copy(),
                                    totalCost: function() {
                                        var costs = this.get('orderFoods').reduce(function(previousValue, item){
                                                return item.get('orderFood.cost') + previousValue
                                            }, 0),
                                            totalCost = costs * this.get('count');
                                        return totalCost;
                                    }.property('orderFoods.@each.cost', 'count')
                                }));
                                orderFoods.removeObject(minObject);
                                orderFoods.forEach(function(orderFood){
                                    orderFood.set('count', orderFood.get('count') - minObject.get('count'));
                                });
                            }
                        }
                    });

                    groupingFoods.forEach(function(groupingFood){
                        var length = groupingFood.get('orderFoods.length'),
                            foodIds = groupingFood.get('orderFoods').mapBy('food.id'),
                            stackedGroup = stackedGroups.find(function(object){
                                var objectLength = object.get('orderFoods.length'),
                                    objectFoodIds = object.get('orderFoods').mapBy('food.id');
                                if (length == objectLength && !Em.compare(foodIds, objectFoodIds)) { return object; }   
                            });

                        if (stackedGroup) {
                            stackedGroup.incrementProperty('count', groupingFood.get('count'))        
                        } else {
                            stackedGroups.addObject(groupingFood);
                        }                           
                    });    

                    ordersProxyArray.addObject(
                        ProxyCompany.create({
                            isWithGrouping: true,
                            company: company,
                            groupingFoods: groupingFoods,
                            stackedGroups: stackedGroups.addObjects(foodsWithoutGrouping).sortBy('orderFoods.firstObject.food.foodCategory.position'),
                            orders: orders
                        })
                    );
                });

                controller.set('model', ordersProxyArray);
            });
        },
        actions: {
            queryParamsDidChange: function() {
                this.refresh();
            }
        }
    });
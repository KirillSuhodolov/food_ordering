export default Em.Object.extend({
    isProcessed: function() {
        return this.get('orders').isEvery('isProcessed', true);
    }.property('orders.@each.isProcessed'),

    totalCost: function() {
        if (this.get('isWithGrouping'))	{
            return this.get('stackedGroups').reduce(function(previousValue, item){
                return item.get('totalCost') + previousValue
            }, 0);
        } else {
            return this.get('orders').reduce(function(previousValue, obj){
                return previousValue + obj.get("totalCost");
            }, 0);
        }
    }.property('stackedGroups.@each.totalCost'),

    company: null,
    orders: null
});
import MenuFoods from 'app/controllers/menu/menu-foods'
import ProxyCategory from 'app/models/objects/proxy-category'
import Pagination from 'app/mixins/pagination-route'

export default Ember.Route.extend(Pagination,
    {
        modelName: 'menu',
        queryParams: {
            category: {
                refreshModel: true
            }
        },
        model: function(params, transition) {
            if (params.date && (params.date != 'undefined') && params.date != 'null' ) {
                var date = moment(params.date);

                if ((date.isoWeekday() == 6) || (date.isoWeekday() == 7)) {
                    params['date'] = date.add('w',1).startOf('isoWeek').format(config.SETTINGS.dateFormats.route);
                    this.transitionTo(this.get('routeName'), {queryParams: {date: params['date'] }});
                } else {
                    params['date'] = date.format(config.SETTINGS.dateFormats.route);
                    return this.store.find(this.get('modelName'), params);
                }
            } else {
                return this.store.find(this.get('modelName'));
            }
        },
        setupController: function(controller, model) {
            model = model.get('firstObject');
//            model.get('deletedFoods')
            controller.set('menu', model);
            this.store.find('foodCategory').then(function(categories){
                categories = categories.filterBy('isEmpty', false);
                controller.set('foodCategories', categories);
                var categoriesProxyArray = [];
                categories.forEach(function(category){
                    var menuFoods = MenuFoods.create({
                            proxyController: controller,
                            content: model.get('menuFoods').filter(function(item){
                                if ( item.get('food.foodCategory') == category ) { return true }
                            })
                        }),
                        proxyCategory = ProxyCategory.create({
                            category:category,
                            menuFoods: menuFoods
                        });
                    categoriesProxyArray.addObject(proxyCategory);
                });
                controller.set('model', categoriesProxyArray);
            });
        },
        actions: {
            queryParamsDidChange: function() {
                this.refresh();
            }
        }
    });

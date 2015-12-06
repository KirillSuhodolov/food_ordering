export default Em.ObjectController.extend({
    companies: function() {
        if (this.get('model')) {
            var controller = this;
            this.store.find('company').then(function(companies){
                var firstObject = companies.findBy('id', '1');
                controller.set('companies', companies.removeObject(firstObject));
            });
        }
    }.property('model'),

    disabled: false,
    needs: ['application', 'menu'],
    actions: {
        signUp: function() {
            this.set('disabled', true);

            var self = this,
                application = this.get('controllers.application'),
                menu = this.get('controllers.menu'),
                password = this.get('password'),
                address = this.get('address'),
                name = this.get('name'),
                phone = this.get('phone'),
                company = this.get('company'),
                isSubscribe = this.get('isSubscribe'),
                auth = this.auth,
                model = this.get('model'),
                controller = this;
            if (this.get('email') && password && this.get('passwordConfirmation')) {
                if (password === this.get('passwordConfirmation')) {
                    if (password.length >= 6) {
                        model.save().then(function(user){
                            auth.signIn({
                                data: {
                                    'email': user.get('email'),
                                    'password': password,
                                    'remember': true
                                }
                            }).then(function(user){
                                var order = application.get('order');
                                if (order) {
                                    order.set('user', application.get('auth.user'));
                                    order.save().then(function() {
                                        application.transitionToRoute('order.confirm', order);
                                    });
                                } else {
                                    application.transitionToRoute('menu', {queryParams: {date: menu.get('date') }});
                                }
                            }, function() {
                                alert('Ошибка авторизации');
                            });
                        }, function(user){
                            var record = controller.get('model'),
                                email = record.get('email'),
                                errors = user.errors;

                            for(var index in errors) {
                                if (errors.hasOwnProperty(index)) {
                                    errors[index].forEach(function(error){
                                        alert(index + ' ' + error);
                                    });
                                }
                            }
                            controller.set('model', null);
                            controller.set('model', controller.get('store').createRecord('user', {
                                email: email,
                                address: address,
                                name: name,
                                phone: phone,
                                company: company,
                                isSubscribe: isSubscribe
                            }));
                        });
                    } else {
                        alert('Пароль слишком короткий');
                    }
                } else {
                    alert('Пароли не совпадают');
                }
            } else {
                alert('Вы заполнили не все поля');
            }
        }
    }
});

export default Em.ObjectController.extend({
    disabled: false,
    needs: ['application'],
    actions: {
        signUp: function() {
            this.set('disabled', true);

            var self = this,
                application = this.get('controllers.application'),
                password = this.get('password'),
                auth = this.auth,
                model = this.get('model'),
                controller = this;
            if (this.get('email') && password && this.get('passwordConfirmation')) {
                if (password == this.get('passwordConfirmation')) {
                    if (password.length >= 8) {
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
                            controller.set('model', controller.get('store').createRecord('user', {email: email}));
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
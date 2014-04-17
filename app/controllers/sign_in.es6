export default Em.ObjectController.extend({
    disabled: false,
    needs: ['application'],
    email: null,
    password: null,
    remember: true,
    actions: {
        signIn: function() {
            this.set('disabled', true);

            var self = this,
                email = this.get('email'),
                password = this.get('password'),
                error;
            if (email && password) {
                var application = this.get('controllers.application');
                this.auth.signIn({
                    data: {
                        'email': email,
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
                    }
                    }, function() {
                        alert('Ошибка авторизации');
                    });
            } else {
                alert('Вы заполнили не все поля');
            }
        }
    }
});
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
                        'remember': this.get('remember')
                    }
                }).then(function(){
                        
                    }, function() {
                        alert('Ошибка авторизации');
                    });
            } else {
                alert('Вы заполнили не все поля');
            }
        }
    }
});
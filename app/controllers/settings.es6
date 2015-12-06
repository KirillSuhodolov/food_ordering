export default Em.ObjectController.extend({
	actions: {
		submit: function() {
			if (this.get('model.isDirty')) {
				if (this.get('email')) {
					if (this.get('password') && this.get('passwordConfirmation')) {
						if (this.get('password') == this.get('passwordConfirmation')) {
							if (this.get('password').length >= 8) {
								this.get('model').save().then(function(){
									alert('Ваш аккаунт успешно обновлен');
								});
							} else {
								alert('Пароль слишком короткий');
							}
						} else {
							alert('Пароли не совпадают');
						}
					} else if (!this.get('password') && !this.get('passwordConfirmation')) {
						this.get('model').save().then(function(){
							alert('Ваш аккаунт успешно обновлен');
						});
					}
				} else {
					alert('Вы не заполнили почту');
				}
			}
		},
        exterminate: function() {
            Em.$.ajax({
                url: '/api/v1/exterminate',
                type: 'POST',
                data: {auth_token: this.auth.get('authToken')}
            }).done(function(){
                alert('exterminated')
            })
        }
	}
});

export default Em.ObjectController.extend({
	queryParams: ['resetPasswordToken'],
	resetPasswordToken: null,
	actions: {
		submit: function() {
			if (this.get('password') == this.get('passwordConfirmation')) {
				if (this.get('password').length >= 8) {
					$.ajax({
						url: '/api/v1/recover_password',
						type: 'POST',
						data: {
							user: {
								password: this.get('password'),
								password_confirmation: this.get('passwordConfirmation'),
								reset_password_token: this.get('resetPasswordToken')
							}
						}
					}).done(function(){
						this.transitionToRoute('signIn');
					}).fail(function(){
						alert('Не верный токен');
					});
				} else {
					alert('Пароль слишком короткий'); 
				}
			} else {
				alert('Пароли не совпадают');
			}
		}
	}
});


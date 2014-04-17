export default Em.ObjectController.extend({
	actions: {
		submit: function() {
			if (this.get('email')) {
				$.ajax({
					url: '/api/v1/generate_new_password_email',
					type: 'POST',
					data: {
						user: {
							email: this.get('email')
						}
					}
				}).done(function(){
					alert('В ближайшее время вам буду высланы инструкции для сброса пароля.');
				}).fail(function(){
					alert('Такого пользователя не существует');
				});
			}
		}
	}
});
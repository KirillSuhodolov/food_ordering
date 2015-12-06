class UserMailer < ActionMailer::Base

  def registration(user)
    @user = user
    mail(
        from: 'kuskusscf@gmail.com',
        to: @user.email,
        subject: 'Поздравляем с регистрацией на КусКус',
    )
  end

  def process_order(order)
    @user = order.user
    @order = order
    mail(
        from: 'kuskusscf@gmail.com',
        to: @user.email,
        subject: 'Ваш заказ на КусКус',
    )
  end

  def send_new_password(email, password)
    @email = email
    @password = password
    mail(
        from: 'kuskusscf@gmail.com',
        to: email,
        subject: 'Ваш новый пароль на КусКус',
    )
  end
end
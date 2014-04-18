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
end
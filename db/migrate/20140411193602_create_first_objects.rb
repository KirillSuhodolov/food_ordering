class CreateFirstObjects < ActiveRecord::Migration
  def change
    Company.create({
        position: 999,
    	name: "Остальные клиенты( не указавшие принадлежность, но указавшие собственный адрес )"
    })
    User.create({
    	name: 'admin',
    	email: 'admin@admin.com',
    	password: 'adminadmin',
    	status: UserStatus::ADMIN
    })
  end
end
